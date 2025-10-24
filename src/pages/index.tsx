import '../styles/global.css'
import * as React from 'react'
import { Script, type HeadFC, type PageProps } from 'gatsby'
import { Navbar } from '../components/navbar/navbar'
import { HomeHero } from '../components/homeHero/homeHero'
import { Box, Button, Divider } from '@mui/material'
import { CalendarMonthOutlined } from '@mui/icons-material'
import { DesignerGrid } from '../components/designersGrid/designerGrid'

import { BookNowButton } from '../components/bookNowButton/bookNowButton'
import FaqSection from '../components/faqSection/faqSection'
import { ContactSection } from '../components/contactSection/contactSection'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={{ maxWidth: '1920px', margin: 'auto' }}>
      <Navbar />
      <HomeHero />
      <Box sx={{ backgroundColor: '#fff' }}>
        <BookNowButton />
        <Box
          component={'section'}
          id="designers"
          sx={{ scrollMarginTop: '100px' }}
        >
          <DesignerGrid />
        </Box>
        <Divider />
        <Box component={'section'} id="faq" sx={{ scrollMarginTop: '100px' }}>
          <FaqSection />
        </Box>
        <Divider />
        <Box
          component={'section'}
          id="contact"
          sx={{ scrollMarginTop: '100px' }}
        >
          <ContactSection />
        </Box>
      </Box>
      <Script
        defer
        src="https://connect.podium.com/widget.js#ORG_TOKEN=0ebad9df-9916-4f02-8d65-8a7b410d9767"
        id="podium-widget"
        data-organization-api-token="0ebad9df-9916-4f02-8d65-8a7b410d9767"
      ></Script>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>The Love Club Bridal</title>
