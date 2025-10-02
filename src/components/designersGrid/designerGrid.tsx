import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { SingleDesigner } from './singleDesigner'
import { styled } from '@mui/system'
import { Designer, designerGridData } from './designerGridData'
import { useAllDesigners } from '../../hooks/useAllDesigners'

const StyledWrapper = styled(Box)`
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing(2.5)};
  padding-left: ${(props) => props.theme.spacing(1)};
  padding-right: ${(props) => props.theme.spacing(1)};

  /* ${(props) => props.theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(
      2,
      calc(50vw - ${(props) => props.theme.spacing(2)})
    );
  } */
`
export const DesignerGrid = () => {
  const designerData = useAllDesigners()

  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        pb: 8,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <Typography variant="h3">Our Designers</Typography>
      </Box>
      <StyledWrapper>
        {designerData.map((designer: Designer) => (
          <SingleDesigner key={designer.description} designer={designer} />
        ))}
      </StyledWrapper>
    </Box>
  )
}
