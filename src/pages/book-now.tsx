import { Box } from '@mui/material'
import React from 'react'
import { BookingForm } from '../components/bookingForm/bookingForm'
const BookNowPage = () => {
  return (
    <main>
      <Box sx={{ p: 3 }}>
        <BookingForm />
      </Box>
    </main>
  )
}

export default BookNowPage
