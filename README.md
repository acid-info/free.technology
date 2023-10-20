# IFT

## Test pages
- `next-mdx-remote` test page: '/'
- `@next/mdx` test page: '/test'


## How to Run Locally

1. Clone this repository
```bash
$ git clone https://github.com/acid-info/ift.git
```

2. Install the dependencies:
```bash
$ yarn install
```

3. Start the development server:
```bash
$ yarn dev
```

4. Visit `http://localhost:3000` in your browser


## How to Run a Static Build (Production Build)

1. Generate static files for production:

```bash
$ yarn build
```

The static files will be created in the `build` directory.

2. Serve the static build:

```bash
$ yarn start
```

4. Visit `http://localhost:3000` in your browser


## CI/CD

- The `master` branch is automatically deployed to the production server (e.g., logos.co) through [CI](https://ci.infra.status.im)
- The `develop` branch is automatically deployed to the staging server (e.g., dev.logos.co) through [CI](https://ci.infra.status.im)


## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`.

2. Make your changes, push them to the `origin`, and open a Pull Request against the `develop` branch.

3. After approval, merge the pull request, and verify the changes on the staging server (https://dev.logos.co/).

4. When ready to promote changes to the live website, create a pull request against the "master" branch, based on the "develop" branch.
