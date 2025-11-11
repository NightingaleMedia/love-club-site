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
    <Script
      defer
      src="https://connect.podium.com/widget.js#ORG_TOKEN=0ebad9df-9916-4f02-8d65-8a7b410d9767"
      id="podium-widget"
      data-organization-api-token="0ebad9df-9916-4f02-8d65-8a7b410d9767"
    ></Script>
  </main>
)
