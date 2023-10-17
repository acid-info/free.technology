pipeline {
  agent { label 'linux' }

  parameters {
    string(
      name: 'IMAGE_TAG',
      defaultValue: params.IMAGE_TAG ?: '',
      description: 'Optional Docker image tag to push.'
    )
  }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    IMAGE_NAME = 'statusteam/ift'
  }

  stages {
    stage('Build') {
      steps {
        script {
          withCredentials([
            usernamePassword(),
            string(
              credentialsId: 'ift-simplecast-token',
              variable: 'SIMPLECAST_ACCESS_TOKEN'
            ),
            string(
              credentialsId: 'ift-webhook-token',
              variable: 'REVALIDATE_WEBHOOK_TOKEN'
            ),
          ]) {
            image = docker.build(
              "${IMAGE_NAME}:${GIT_COMMIT.take(8)}",
              ["--build-arg='REVALIDATE_WEBHOOK_TOKEN=${REVALIDATE_WEBHOOK_TOKEN}'",
               "."].join(' ')
            )
          }
        }
      }
    }

    stage('Push') {
      steps { script {
        withDockerRegistry([
          credentialsId: 'dockerhub-statusteam-auto', url: ''
        ]) {
          image.push()
        }
      } }
    }

    stage('Deploy') {
      when { expression { params.IMAGE_TAG != '' } }
      steps { script {
        withDockerRegistry([
          credentialsId: 'dockerhub-statusteam-auto', url: ''
        ]) {
          image.push(params.IMAGE_TAG)
        }
      } }
    }
  }

  post {
    cleanup { cleanWs() }
    always { script {
      def result  = currentBuild.result.toLowerCase() ?: 'unknown'
      discordNotify(header: "IFT Docker image build ${result}!")
    } }
  }
}

def discordNotify(Map args=[:]) {
  def opts = [
    header: args.header ?: 'Deployment successful!',
    title:  args.title  ?: "${env.JOB_NAME}#${env.BUILD_NUMBER}",
    cred:   args.cred   ?: 'ift-discord-webhook-url',
  ]
  def repo = [
    url: GIT_URL.minus('.git'),
    branch: GIT_BRANCH.minus('origin/'),
    commit: GIT_COMMIT.take(8),
    prev: (
      env.GIT_PREVIOUS_SUCCESSFUL_COMMIT ?: env.GIT_PREVIOUS_COMMIT ?: 'master'
    ).take(8),
  ]
  wrap([$class: 'BuildUser']) {
    BUILD_USER_ID = env.BUILD_USER_ID
  }
  withCredentials([
    string(
      credentialsId: opts.cred,
      variable: 'DISCORD_WEBHOOK',
    ),
  ]) {
    discordSend(
      link: env.BUILD_URL,
      result: currentBuild.currentResult,
      webhookURL: env.DISCORD_WEBHOOK,
      title: opts.title,
      description: """
        ${opts.header}
        Image: [`${env.IMAGE_NAME}:${params.IMAGE_TAG}`](https://hub.docker.com/r/${params.DOCKER_NAME}/tags?name=${params.IMAGE_TAG})
        Branch: [`${repo.branch}`](${repo.url}/commits/${repo.branch})
        Commit: [`${repo.commit}`](${repo.url}/commit/${repo.commit})
        Diff: [`${repo.prev}...${repo.commit}`](${repo.url}/compare/${repo.prev}...${repo.commit})
        By: [`${BUILD_USER_ID}`](${repo.url}/commits?author=${BUILD_USER_ID})
      """,
    )
  }
}
