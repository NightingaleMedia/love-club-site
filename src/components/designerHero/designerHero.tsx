import { Box } from '@mui/material'
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  IGatsbyImageData,
} from 'gatsby-plugin-image'
import React from 'react'

interface DesignerHeroDesktopProps extends GatsbyImageProps {}
interface DesignerHeroMobileProps extends GatsbyImageProps {}
export const DesignerHeroDesktop = (props: DesignerHeroDesktopProps | null) => {
  return props ? (
    <div>
      <GatsbyImage {...props} />
    </div>
  ) : null
}

export const DesignerHeroMobile = (props: DesignerHeroMobileProps | null) => {
  return props ? (
    <div>
      <GatsbyImage {...props} />
    </div>
  ) : null
}

export const DesignerHero = (props: {
  desktopProps: DesignerHeroDesktopProps | null
  mobileProps: DesignerHeroMobileProps | null
}) => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          display: 'inherit',
          [theme.breakpoints.down('md')]: { display: 'none' },
        })}
      >
        <DesignerHeroDesktop {...props.desktopProps} />
      </Box>
      <Box
        sx={(theme) => ({
          display: 'none',
          [theme.breakpoints.between('xs', 'md')]: { display: 'block' },
        })}
      >
        <DesignerHeroMobile {...props.mobileProps} />
      </Box>
    </Box>
  )
}
