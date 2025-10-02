import { CalendarMonthOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import { NAVBAR_HEIGHT, NAVBAR_ZINDEX } from '../../styles/style-constants'

export const BookNowButton = () => (
  <Box
    sx={{
      position: 'sticky',
      top: NAVBAR_HEIGHT,
      zIndex: NAVBAR_ZINDEX,
      cursor: 'pointer',
    }}
  >
    <Button
      variant="contained"
      sx={{
        width: '100%',
        py: 3,
        cursor: 'pointer',
      }}
      href="/book-now"
      startIcon={<CalendarMonthOutlined />}
    >
      Book An Appointment
    </Button>
  </Box>
)
