module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://HomeHorizon.pl"},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-background-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/layouts/index.js"},"remarkPlugins":[null],"rehypePlugins":[null],"gatsbyRemarkPlugins":["gatsby-remark-embedder","gatsby-remark-copy-linked-files","gatsby-remark-autolink-headers",{"resolve":"gatsby-remark-twitter-cards","options":{"title":"HomeHorizon","separator":"|","author":"Michasz","fontColor":"#663399","fontStyle":"sans-serif","titleFontSize":124,"fontFile":"/Users/michalchecinski/Desktop/homihorizon/homehorizon/static/fonts/GT-Haptik-Regular.ttf"}},"gatsby-remark-smartypants",{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"showCaptions":true}}],"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/michalchecinski/Desktop/homihorizon/homehorizon"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#337c99","theme_color":"#337c99","display":"minimal-ui","icon":"src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"305b49fc78655b7c49a72f0b095eda44"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
