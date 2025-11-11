import { Box, Typography } from '@mui/material'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface CarouselImage extends IGatsbyImageData {
  alt?: string
}
export const DesignerFavoritesCarousel = (props: {
  images: CarouselImage[]
}) => {
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  console.log('images', props.images[0])

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
        A Few Of Our Favorites
      </Typography>
      <Box sx={{ px: 0 }}>
        <Carousel responsive={responsive}>
          {props.images.map((image, index) => (
            <Box key={index} sx={{ mx: 0 }}>
              <GatsbyImage
                image={image}
                alt={image.alt ?? ''}
                style={
                  {
                    // cursor: 'pointer',
                    // height: '100%',
                    // width: '100%',
                    // top: 0,
                    // left: 0,
                    // bottom: 0,
                    // right: 0,
                    // color: 'white',
                    // textAlign: 'center',
                  }
                }
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}
