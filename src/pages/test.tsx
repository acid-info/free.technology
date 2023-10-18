import { SEO } from '@/components/SEO'
import { HomePage } from '@/containers/HomePage'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DefaultLayout } from '../layouts/DefaultLayout'

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

const Page = ({ mdxSource }: Props) => {
  return (
    <>
      <SEO />
      <HomePage />
      <MDXRemote {...mdxSource} />
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getStaticProps() {
  const source = '**mdx** example'
  const mdxSource = await serialize(source)
  return { props: { mdxSource } }
}

export default Page
