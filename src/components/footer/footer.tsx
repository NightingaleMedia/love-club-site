import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { styled } from '@mui/system'
import navLogo from '../../assets/logos/nav-logo-1.svg'
import { SocialIcons } from '../socialIcons/socialIcons'

const StyledInner = styled(Box)(({ theme, fullWidth }) => ({
  maxWidth: fullWidth ? '100%' : '1024px',
  minHeight: '550px',
  margin: 'auto',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(10),
  display: 'grid',
  gridTemplateColumns: '1fr ',
}))
;`

`
export const Footer = ({ fullWidth = true }: { fullWidth?: boolean }) => {
  return (
    <Box component={'footer'} sx={{ minHeight: '550px', width: '100%' }}>
      <StyledInner fullWidth={fullWidth}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            src={navLogo}
            style={{ maxHeight: '80px', width: 'auto', margin: 'auto' }}
            alt="Love Club Bridal Logo"
          />
          <Box sx={{ my: 8, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              The Love Club Bridal
            </Typography>
            <Typography variant="body1">122 S Main St, Suite 320</Typography>
            <Typography variant="body1">Ann Arbor, MI 48104</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <SocialIcons />
          </Box>
        </Box>
      </StyledInner>
    </Box>
  )
}
