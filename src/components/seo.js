import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description = ``, lang = `en`, meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `robots`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `googlebot`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `bingbot`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `author`,
          content: `Trustpoint Project Team`,
        },
        {
          name: `publisher`,
          content: `Trustpoint Project`,
        },
        {
          name: `language`,
          content: `English`,
        },
        {
          name: `revisit-after`,
          content: `7 days`,
        },
        {
          httpEquiv: `content-language`,
          content: `en-US`,
        },
        {
          name: `format-detection`,
          content: `telephone=no`,
        },
        {
          name: `theme-color`,
          content: `#004aad`,
        },
        {
          name: `msapplication-TileColor`,
          content: `#004aad`,
        },
        {
          name: `application-name`,
          content: `Trustpoint`,
        },
      ].concat(meta)}
    />
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
