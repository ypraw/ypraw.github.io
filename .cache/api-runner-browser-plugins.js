module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/run/media/ypraw/Data/Programming/blog/ypraw.github.io/src/layouts/index.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Ypraw Blog","short_name":"yprawblog","start_url":"/index.html","background_color":"#333333","theme_color":"#ff0f7b","display":"standalone","icons":[{"src":"/icons/icon-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-256x256.png","sizes":"256x256","type":"image/png"},{"src":"/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-97807209-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]