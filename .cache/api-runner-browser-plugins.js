module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Trustpoint - Digital Certificate Management","short_name":"Trustpoint","description":"Trustpoint supports you in the management of digital certificates in industrial environments.","start_url":"/","background_color":"#ffffff","theme_color":"#004aad","display":"standalone","icon":"static/logos/trustpoint_favicon_main.png","icons":[{"src":"/logos/trustpoint_favicon_main.png","sizes":"192x192","type":"image/png"},{"src":"/logos/trustpoint_favicon_main.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f2e50e848c4daf3b2f153d0e7855d743"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
