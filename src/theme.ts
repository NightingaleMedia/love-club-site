import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    primary: {
      main: '#ffffff',
      dark: '#eae5da',
    },
    secondary: {
      main: '#d16032',
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
})
