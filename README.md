# galatea-ui

The official UI for interacting with the Pygmalion models.

Very early work in progress.

## Contributing

If you wish to contribute, this section has some relevant information.

### Tech stack

The important parts of the stack are:

- [SolidJS](https://www.solidjs.com/) for interactivity
- [TailwindCSS](https://tailwindcss.com/) for styling
- [pnpm](https://pnpm.io/) for dependency management

### Quick start

Easy self-hosted method: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPygmalionAI%2Fgalatea-ui&demo-title=GalateaUI&demo-description=A%20finished%20product%20deployment%20for%20you%20to%20try!&demo-url=https%3A%2F%2Fpymaglion.vercel.app%2F&demo-image=https%3A%2F%2Fs3.amazonaws.com%2Fmoonup%2Fproduction%2Fuploads%2F1674800669496-63a218623c003e40931a6cff.png)
OR
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/PygmalionAI/galatea-ui)

Otherwise, you can create your own instance yourself.
If you have Node and `pnpm` installed and working, you can start the development server with:

```bash
# install dependencies
$ pnpm install

# start the dev server
$ pnpm start
```

By default, it expects the back-end to be running locally at `http://localhost:3000`. If that's not the case, you can override this with the `CORE_API_SERVER` environment variable.

### Code quality checks

The project uses ESLint for linting, Prettier for enforcing code style and TypeScript to check for type errors. When opening a PR, please make sure you're not introducing any new errors in any of these checks by running:

```bash
# auto-fixes any style problems
$ pnpm run style:fix

# auto-fixes any linting problems, and prints the ones that can't be auto-fixed
$ pnpm run lint:fix

# runs the TypeScript compiler so any type errors will be shown
$ pnpm run typecheck
```
