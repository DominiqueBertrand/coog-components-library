# Coog React Component Library

[![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)](https://opensource.org/licenses/GNU)

This projet is a React UI components library designed to used in the Coopengo ecosystem.

The component set is built specifically for React development. This ensures zero dependencies and all the components are fully optimized for React.

Coog React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```bash
yarn test
```

### Building

```bash
yarn build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```bash
yarn storybook
```

To export your Storybook as static files:

```bash
yarn storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc.

### Generating New Components

This project included a handy NodeJS util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```bash
yarn generate YourComponentName
```

This will generate:

```txt
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Using Component Library SASS Variables

You can export SASS variables to projects consuming the library. As such, the `rollup-plugin-copy` NPM package is used to copy the `typography.scss` and `variables.scss` into the `build` directory as part of the Rollup bundle process. This allows you to use these variables in your projects consuming the component library.

## Additional Help

### Supporting Image Imports

Add the following library to your component library [@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image):

```bash
npm i -D @rollup/plugin-image
```

Then add it to `rollup-config.js`:

```js
...
plugins:[
  ...,
  image(),
  ...
]
...
```

You can then import and render images in your components like:

```tsx
import logo from "./rollup.png";

export const ImageComponent = () => (
  <div>
    <img src={logo} />
  </div>
);
```

### Supporting JSON Imports

Add the following library to your component library [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json):

```bash
yarn add -D @rollup/plugin-json
```

Then add it to `rollup-config.js`:

```js
...
plugins:[
  ...,
  json(),
  ...
]
...
```

You can then import and use JSON as ES6 Modules:

```tsx
import data from "./some-data.json";

export const JsonDataComponent = () => <div>{data.description}</div>;
```

Checkout the [official Rollup plugin list](https://github.com/rollup/plugins) for additional helpful plugins.
