import {
  EmailOutlined,
  EmailRounded,
  EmailTwoTone,
  Phone,
  PhoneOutlined,
  PhoneTwoTone,
} from '@mui/icons-material'
import { Box, Link, Typography, IconButton } from '@mui/material'
import React from 'react'
import { HELLO_EMAIL, PHONE_NUMBER } from '../../constants'
export const ContactSection = () => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        margin: 'auto',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        justifyItems: 'center',
        pt: 8,
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: '1fr',
          gridTemplateRows: '400px auto',
          alignItems: 'center',
          minHeight: 'unset',
        },
      })}
    >
      <Box sx={{ width: '100%', height: '100%' }}>
        <iframe
          title="contact-us-frame"
          style={{ border: 0, margin: 'auto' }}
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;q=The Love Club Bridal, Ann Arbor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </Box>
      <Box
        sx={(theme) => ({
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: '#7baaae',
          color: 'white',
          width: '100%',
        })}
      >
        <Box sx={{ py: 8 }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              The Love Club Bridal
            </Typography>
            <Typography variant="body1">122 S Main St, Suite 320</Typography>
            <Typography variant="body1">Ann Arbor, MI 48104</Typography>
          </Box>
          <Typography variant="body1">
            <Link
              color="error.dark"
              underline="hover"
              href={`tel:${PHONE_NUMBER}`}
            >
              {PHONE_NUMBER}
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              color="error.dark"
              underline="hover"
              href={`mailto:${HELLO_EMAIL}`}
            >
              {HELLO_EMAIL}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
