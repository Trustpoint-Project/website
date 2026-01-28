module.exports = {
  siteMetadata: {
    title: `Trustpoint`,
    description: `Trustpoint supports you in the management of digital certificates in industrial environments. The trust anchor for mechanical engineering and the manufacturing industry.`,
    author: `@trustpoint`,
    siteUrl: `https://industrial-security.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trustpoint - Digital Certificate Management`,
        short_name: `Trustpoint`,
        description: `Trustpoint supports you in the management of digital certificates in industrial environments.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#004aad`,
        display: `standalone`,
        icon: `static/logos/trustpoint_favicon_main_white_bg.png`,
        icons: [
          {
            src: `/logos/trustpoint_favicon_main_white_bg.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/logos/trustpoint_favicon_main_white_bg.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
