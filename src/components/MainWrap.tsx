import { Script } from 'gatsby'
import React from 'react'
import { Navbar } from './navbar/navbar'
import { BookNowButton } from './bookNowButton/bookNowButton'
import { Footer } from './footer/footer'
import { SEO } from './seo/seo'
export const MainWrap = ({
  children,
  fullWidthFooter = true,
}: {
  children: React.ReactNode
  fullWidthFooter?: boolean
}) => (
  <main style={{ maxWidth: '1920px', margin: 'auto' }}>
    <SEO />
    <Navbar />
    {children}
    <Footer fullWidth={fullWidthFooter} />
  </main>
)
