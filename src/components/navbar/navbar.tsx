import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import navLogo from '../../assets/logos/nav-logo-1.svg'
import {
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Inbox, Mail } from '@mui/icons-material'
import { sections } from './sectionData'
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Box></Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img
            src={navLogo}
            style={{ maxHeight: '30px', width: 'auto', flexGrow: 1 }}
            alt="Love Club Bridal Logo"
          />
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        keepMounted={false}
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
      >
        <Box
          sx={{
            minWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            pb: 4,
          }}
          role="presentation"
        >
          <Box>
            <Box sx={{ p: 4 }}>
              <img
                src={navLogo}
                style={{ maxHeight: '30px', width: 'auto', margin: 'auto' }}
                alt="Love Club Bridal Logo"
              />
            </Box>
            <List>
              {sections.map((section, index) => (
                <Link
                  href={section.id}
                  onClick={toggleDrawer(false)}
                  underline="none"
                  color="inherit"
                >
                  <ListItem key={section.id} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{section.icon}</ListItemIcon>

                      <ListItemText primary={section.label}></ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ color: 'white', margin: 'auto' }}
              href="/book-now"
            >
              Book An Appointment
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  )
}
