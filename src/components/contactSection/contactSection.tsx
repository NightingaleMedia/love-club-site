import { EmailOutlined, Phone, PhoneOutlined } from '@mui/icons-material'
import { Box, Link, Typography, IconButton } from '@mui/material'
import React from 'react'
export const ContactSection = () => {
  return (
    <Box sx={{ minHeight: '100vh', pb: 20 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 8 }}>
        <Typography variant="h3">Contact Us</Typography>
      </Box>
      <Box
        sx={(theme) => ({
          maxWidth: '1200px',
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          justifyItems: 'center',
          pt: 8,
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            gap: theme.spacing(4),
          },
        })}
      >
        <iframe
          title="contact-us-frame"
          style={{ maxWidth: '500px', border: 0 }}
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;q=Beloved Bridal, Ann Arbor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>

        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.5rem' }}
              >
                The Love Club Bridal
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '1.5rem' }}>
                122 S Main St, Suite 320
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '1.5rem' }}>
                Ann Arbor, MI 48104
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.5rem' }}>
              <IconButton href="tel:(734) 222-3030">
                <PhoneOutlined />
              </IconButton>
              <Link color="success" underline="hover" href="tel:(734) 222-3030">
                (734) 222-3030
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.5rem' }}>
              <IconButton href="mailto:meg@theloveclubbridal.com">
                <EmailOutlined />
              </IconButton>
              <Link
                color="success"
                underline="hover"
                href="mailto:meg@theloveclubbridal.com"
              >
                meg@loveclubbridal.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
