import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import navLogo from '../../assets/logos/nav-logo-1.svg'
import { useAboutContent } from '../../hooks/useAboutContent'
export const AboutUs = () => {
  const content = useAboutContent()
  return (
    <Box
      sx={(theme) => ({
        // backgroundColor: 'white',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 10,
        textAlign: 'center',
      })}
    >
      <Box sx={{ maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h3">Welcome To The Love Club!</Typography>

        {content.descriptionParagraphs.map((paragraph) => (
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mt: 4,
              fontSize: '1.2rem',
              px: 4,
              textAlign: 'left',
            }}
          >
            {paragraph}
          </Typography>
        ))}
        <Box sx={{ my: 10 }}>
          <img
            src={navLogo}
            style={{ maxHeight: '60px', width: 'auto', margin: 'auto' }}
            alt="Love Club Bridal Logo"
          />
        </Box>
        <Divider sx={{ mt: 6 }} />
      </Box>
    </Box>
  )
}
