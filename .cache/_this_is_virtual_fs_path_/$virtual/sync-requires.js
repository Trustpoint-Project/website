
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/florianhandke/PycharmProjects/website/src/pages/index.js"))
}

