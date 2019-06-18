# gatsby-plugin-styled-jsx-postcss

A Gatsby plugin to use styled-jsx with PostCSS.

## Install

With Yarn:

```bash
yarn add gatsby-plugin-styled-jsx-postcss
```

Or with npm:

```bash
npm install --save gatsby-plugin-styled-jsx-postcss
```

## Usage

```javascript
// In your gatsby-config.js
plugins: [
  'gatsby-plugin-styled-jsx-postcss',
]
```

## Options

This plugin will also watch CSS files and refresh your browser on change if running in `develop` mode. This is because if you're importing other CSS files in your `<style>` tags, the browser will not refresh on its own. To disable this set a `watchCss` option to `false`.

## Adding PostCSS plugins

This plugin uses the postcss-load-plugins, so you can import PostCSS plugins with any of the [methods mentioned in their documentation](https://github.com/michael-ciniawsky/postcss-load-plugins).
