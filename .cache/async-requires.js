// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-category-js": () => import("./../../../src/pages/category.js" /* webpackChunkName: "component---src-pages-category-js" */),
  "component---src-pages-search-js": () => import("./../../../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-templates-category-template-js": () => import("./../../../src/templates/CategoryTemplate.js" /* webpackChunkName: "component---src-templates-category-template-js" */),
  "component---src-templates-index-js": () => import("./../../../src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-page-template-js": () => import("./../../../src/templates/PageTemplate.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---src-templates-post-template-js": () => import("./../../../src/templates/PostTemplate.js" /* webpackChunkName: "component---src-templates-post-template-js" */)
}

