import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Designer } from './designerGridData'

const StyledDesignerBox = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: transform 0.6s ease-in-out;
  &:before {
    content: '';
    cursor: pointer !important;
    display: block;
    padding-top: 100%;
    border-radius: 8px;
  }
  & .designer-image {
    cursor: pointer;
    transition: transform 0.6s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.6s ease-in-out;
    }
  }
`
const StyledWrap = styled(Box)`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 180px;
  }
`
export const SingleDesigner: React.FC<{ designer: Designer }> = ({
  designer,
}) => {
  return (
    <StyledWrap>
      <StyledDesignerBox>
        <GatsbyImage
          image={getImage(designer.imageData)!}
          alt={designer.name}
          className="designer-image"
          style={{
            cursor: 'pointer',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            color: 'white',
            textAlign: 'center',
          }}
        />
      </StyledDesignerBox>
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', fontWeight: 600, fontSize: '1.25rem' }}
        >
          {designer.name}
        </Typography>
      </Box>
    </StyledWrap>
  )
}
