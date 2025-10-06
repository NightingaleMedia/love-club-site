import { Box } from '@mui/material'
import React from 'react'
import { BookingForm } from '../components/bookingForm/bookingForm'
const BookNowPage = () => {
  return (
    <main>
      <Box
        sx={(theme) => ({
          px: 1,
          pb: 10,
          [theme.breakpoints.up('sm')]: {
            px: 3,
            maxWidth: '768px',
            margin: 'auto',
          },
        })}
      >
        <BookingForm />
      </Box>
    </main>
  )
}

export default BookNowPage
