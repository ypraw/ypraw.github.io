var plugins = [{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-styled-jsx/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-styled-jsx-postcss/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/run/media/ypraw/Data/Programming/blog/ypraw.github.io/src/layouts/index.js"},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Ypraw Blog","short_name":"yprawblog","start_url":"/index.html","background_color":"#333333","theme_color":"#009688","display":"standalone","icons":[{"src":"/icons/icon-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-256x256.png","sizes":"256x256","type":"image/png"},{"src":"/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-97807209-1"},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  limit: 1000,\n                  sort: { order: DESC, fields: [fields___prefix] },\n                  filter: { fields: { slug: { ne: null } } }\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields {\n                        slug\n                        prefix\n                      }\n                      frontmatter {\n                        title\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml"}]},
    },{
      plugin: require('/run/media/ypraw/Data/Programming/blog/ypraw.github.io/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
