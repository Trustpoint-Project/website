const path = require('path')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // In development, create a catch-all route that uses the 404 component
  if (process.env.NODE_ENV === 'development') {
    createPage({
      path: '/404/',
      matchPath: '/*',
      component: path.resolve('src/pages/404.js'),
    })
  }
}
