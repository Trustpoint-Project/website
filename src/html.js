import * as React from "react"
import PropTypes from "prop-types"

const Html = ({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logos/trustpoint_favicon_main.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logos/trustpoint_favicon_main.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logos/trustpoint_favicon_main.png" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

Html.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default Html
