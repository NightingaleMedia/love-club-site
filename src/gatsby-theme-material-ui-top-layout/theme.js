import { createTheme } from '@mui/material'
import { NAVBAR_HEIGHT } from '../styles/style-constants'
export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#eae5da',
      default: '#d2d8d880',
    },
    text: {
      primary: '#333333',
      secondary: '#fac6d3',
    },
    primary: {
      main: '#eae5da',
      dark: '#eae5da',
    },
    secondary: {
      main: '#fac6d3',
      light: '#7baaae',
      dark: '#eae5da',
    },
    success: {
      main: '#ff8cc6',
    },
    warning: {
      main: '#d7c908',
    },
    error: {
      main: '#325e05',
    },
    info: {
      main: '#fac6d3',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      fontFamily: 'League Spartan, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 800,
      lineHeight: '3rem',
    },
    h2: {
      fontFamily: 'Century Gothic, sans-serif',
      fontSize: '3.25rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Century Gothic, sans-serif',
      fontSize: '2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'Century Gothic, sans-serif',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#7BAAAE',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontWeight: 800,
          paddingTop: '12px',
          paddingBottom: '12px',
          cursor: 'pointer',
        },
        containedSizeLarge: {
          fontSize: '1.25rem',
        },
        containedSecondary: {
          color: 'white',
          //   outline: '1px solid #FFFFFF',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          minHeight: NAVBAR_HEIGHT,
        },
      },
    },
  },
})
export default theme
