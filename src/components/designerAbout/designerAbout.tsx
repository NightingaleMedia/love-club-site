import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { getPrice } from '../../utils/currency'
export const DesignerAbout = ({
  title,
  description,
  longDescription,
  priceRangeLow,
  priceRangeHigh,
}: {
  title: string
  description: string
  longDescription?: string
  priceRangeLow?: number
  priceRangeHigh?: number
}) => {
  return (
    <Box
      sx={(theme) => ({
        maxWidth: '660px',
        margin: 'auto',
        mb: 20,
        [theme.breakpoints.down('sm')]: { mb: 10 },
      })}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Typography variant="h3" sx={{ fontSize: '1rem', mb: 2 }}>
        Price Range: {getPrice(priceRangeLow || 0)} to{' '}
        {getPrice(priceRangeHigh || 0)}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography
        variant="body1"
        sx={{
          my: 2,
          fontSize: '1.15rem',
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        {description}
      </Typography>
      {longDescription && (
        <Typography variant="body1" sx={{ my: 2, fontSize: '1.15rem' }}>
          {longDescription}
        </Typography>
      )}
    </Box>
  )
}
