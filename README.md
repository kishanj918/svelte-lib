## App Svelte Library

[![Publish Package to Registery](https://github.com/AppPay/App-svelte-library/actions/workflows/publish.yaml/badge.svg)](https://github.com/AppPay/App-svelte-library/actions/workflows/publish.yaml)

The App Svelte Library is a library of App UI Components based on the App design system for the web framework Svelte.js.

To view components in the App Svelte Library run:

```sh
yarn # installs dependencies
yarn dev # starts a development server (usually on localhost:5173 - but do check output)
```

## Adding Components

Components can be added to the App Svelte Library by adding additional `.svelte` files (or a folder with an `index.ts` inside) to `src/lib`.

Components should then be imported into `src/lib/index.js` for package and export. To allow components to be separately imported by dependent projects, export your components from `src/lib/index.js` by writing `export * from './<path>`.

## UI Library Development

To increase maintainability and ensure a consistent code standard, here is a list of requirements that should be considered when writing components/editting components, creating a PR.

- Changes should not removed a property from any component exported by this library
  - If you wish to remove a property from a component, you should create a version 2 component, and leave the existing component available
- Changes should not disabled any ESLint rules for a component
- Changes should not spread properties in any exported components
- Components should use `<p>`, `<h1/2/3/4>`, `<span>` (but only within a `<p>`), `<button>` or `<a>` for text, or have included suitable ARIA labelling where otherwise not possible
- Components should not directly style components with inline styles
- Components should not expose direct styling options except in the form of classes that can be applied to the component (or sub-components within)
- Components should not directly access a browser-only API, (such as `window`, `document` etc.). Alternatively, this PR implements a guard (such as `if (browser)`) to ensure that an API is available - and implements suitable default behaviour
- Components should allow their parents to size them in one or more of three ways:
  - by assuming full width (and where appropriate height), allowing their parent container (`<div>` or similiar) to have a size specified
  - by exposing a size property with enumerated size options (e.g. ButtonSizes.SMALL, ButtonSizes.MEDIUM etc.)
  - by exposing a property to provide sizing classes (e.g. `<SomeComponent classes="w-32">`)
