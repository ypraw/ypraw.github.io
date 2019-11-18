const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-category-template-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/templates/CategoryTemplate.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/templates/PostTemplate.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/templates/PageTemplate.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/templates/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/pages/404.js"))),
  "component---src-pages-category-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/pages/category.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/home/ypraw/Programming/blog/ypraw.github.io/src/pages/search.js")))
}

