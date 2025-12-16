import React from 'react'
import { Script } from 'gatsby'

export const Gtag = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-J7J7CWG628"
    ></Script>
    <Script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-J7J7CWG628');`,
      }}
    />
  </>
)
