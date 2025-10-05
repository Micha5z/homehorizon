const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/about.js"))),
  "component---src-pages-domy-inteligentne-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/domy-inteligentne.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/index.js"))),
  "component---src-pages-kontakt-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/kontakt.js"))),
  "component---src-pages-lazienki-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/lazienki.js"))),
  "component---src-pages-oferta-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/oferta.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/privacy.js"))),
  "component---src-pages-projekty-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/projekty.js"))),
  "component---src-pages-wnetrza-indywidualne-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/wnetrza-indywidualne.js"))),
  "component---src-pages-wnetrza-komercyjne-js": hot(preferDefault(require("/Users/michalchecinski/Desktop/homihorizon/homehorizon/src/pages/wnetrza-komercyjne.js")))
}

