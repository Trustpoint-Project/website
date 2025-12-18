module.exports = {
  siteMetadata: {
    siteTitle: `Trustpoint`,
    siteTitleAlt: `Trustpoint - Digital Certificate Management`,
    siteHeadline: `Trustpoint - Digital Certificate Management for Industrial Environments`,
    siteUrl: `https://trustpoint.campus-schwarzwald.de`,
    siteDescription: `Trustpoint supports you in the management of digital certificates in industrial environments. The trust anchor for mechanical engineering and the manufacturing industry.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@trustpoint`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trustpoint - Digital Certificate Management`,
        short_name: `Trustpoint`,
        description: `Trustpoint supports you in the management of digital certificates in industrial environments.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#2e8555`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
