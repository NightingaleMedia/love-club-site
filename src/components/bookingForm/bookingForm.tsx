import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import './bookingStyles.module.css'
const StyledOverrideBox = styled(Box)`
  .bl-iframe {
  }
`
export const BookingForm = () => {
  return (
    <StyledOverrideBox>
      <iframe
        src="https://app.bridallive.com/bl-server/appointmentRequest/1035ac0a.shtml?lang=en"
        width="100%"
        style={{ minHeight: '100vh', border: 'none', margin: '5px' }}
        frameBorder="0"
        className="bl-iframe"
      ></iframe>
    </StyledOverrideBox>
  )
}
