// gatsby-ssr.js

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
      rel="stylesheet"
    />,
  ])
}
