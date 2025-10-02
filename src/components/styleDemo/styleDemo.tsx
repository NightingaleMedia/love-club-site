import { Typography, Button, Box } from '@mui/material'
import React from 'react'
export const StyleDemo = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" color="primary">
          Biggest Title
        </Typography>
        <Typography variant="h2">Second Biggest Title</Typography>
        <Typography variant="h3">Third Biggest Title</Typography>
        <Typography variant="h4">Fourth Biggest Title</Typography>
        <Typography variant="h5">Fifth Biggest Title</Typography>
        <Typography variant="h6">Sixth Biggest Title</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="caption">Caption Text</Typography>
        <Typography variant="overline">Overline Text</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 'auto' }}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button variant="outlined" color="primary">
          Outlined Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined Secondary
        </Button>
        <Button variant="text" color="primary">
          Text Primary
        </Button>
        <Button variant="text" color="secondary">
          Text Secondary
        </Button>
      </Box>
    </div>
  )
}
