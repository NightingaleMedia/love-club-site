import { Box, Button, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { NAVBAR_HEIGHT } from '../../styles/style-constants'

const FindYourDressText = () => (
  <>
    <Typography
      variant="h1"
      color="textSecondary"
      sx={{
        textAlign: 'center',
        textShadow: '0px 10px 11px rgba(0, 0, 0, 0.8)',
      }}
    >
      Let's find your dress
    </Typography>
    <Box
      sx={{
        fontFamily: `"League Spartan", sans-serif`,
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: '1.25rem',
        color: '#fac6d3',
        mt: 6,
        textShadow: '0px 0px 8px rgba(0, 0, 0, 0.9)',
      }}
    >
      (And have fun doing it)
    </Box>
  </>
)
const BookNowButton = () => (
  <Button
    sx={{ mt: 6, px: 4, py: 1 }}
    color="secondary"
    variant="contained"
    size="large"
    href="/book-now"
  >
    Book Now
  </Button>
)
const HomeHeroMobile = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        minHeight: 'calc(100vh - ' + NAVBAR_HEIGHT + ')',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          color: 'white',
          pt: 6,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        <FindYourDressText />
        <BookNowButton />
      </Box>

      <Box
        sx={(theme) => ({
          width: '100%',
          position: 'fixed',
          top: 0,
          zIndex: -2,
        })}
      >
        <StaticImage
          src={'../../assets/img/hero1-mobile.png'}
          alt="a bride stands in front of an epic building"
          objectFit="cover"
          style={{ height: '100vh' }}
          layout="fullWidth"
        />
      </Box>
    </Box>
  )
}
const HomeHeroDesktop = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        maxHeight: `calc(768px)`,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: 'white',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          left: 0,
          right: 0,
          margin: 'auto',
          bottom: '10%',
        }}
      >
        <FindYourDressText />
        <BookNowButton />
      </Box>
      <Box>
        <StaticImage
          src={'../../assets/img/hero1-desktop.png'}
          alt="a bride stands in front of an epic building"
          objectFit="scale-down"
          style={{
            transform: 'translateY(-15%)',
          }}
          // objectPosition={'top'}
          layout="fullWidth"
          // layout="constrained"/
        />
      </Box>
    </Box>
  )
}

export const HomeHero = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: 'inherit',
          [theme.breakpoints.down('md')]: { display: 'none' },
        })}
      >
        <HomeHeroDesktop />
      </Box>
      <Box
        sx={(theme) => ({
          display: 'none',
          [theme.breakpoints.between('xs', 'md')]: { display: 'block' },
        })}
      >
        <HomeHeroMobile />
      </Box>
    </>
  )
}
