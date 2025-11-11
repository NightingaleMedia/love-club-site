import { Box, Button } from '@mui/material'
import React from 'react'
export const DesignerPreShopButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 20 }}>
      <Button
        variant="contained"
        size="large"
        href="https://www.pinterest.com/theloveclubbridal/"
        target="_blank"
      >
        Pre-Shop Our Collection
      </Button>
    </Box>
  )
}
