import React from 'react'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const SEO = ({ children }: { children: React.ReactNode }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: defaultTitle,
    description: defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="og:image" content={seo.image} /> s
      <meta name="og:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="og:description" content={seo.description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>❤️</text></svg>"
      />
      {children}
    </>
  )
}
