import React from 'react'
import { Facebook, Instagram, Pinterest } from '@mui/icons-material'
import { Link } from '@mui/material'
import tiktok from '../../assets/icons/tiktok.png'

export const SocialIcons = () => (
  <>
    <Link
      href="https://www.instagram.com/theloveclubbridal/"
      target="_blank"
      color="textPrimary"
    >
      <Instagram fontSize="medium" />
    </Link>
    <Link
      href="https://www.facebook.com/profile.php?id=61583362922286"
      target="_blank"
      color="textPrimary"
    >
      <Facebook fontSize="medium" />
    </Link>
    <Link
      href="https://www.pinterest.com/theloveclubbridal/"
      target="_blank"
      color="textPrimary"
    >
      <Pinterest fontSize="medium" />
    </Link>
    <Link
      href="https://www.tiktok.com/@theloveclubbridal"
      target="_blank"
      color="textPrimary"
    >
      <img
        src={tiktok}
        style={{ height: '22px', width: '22px', marginTop: '2px' }}
      />
    </Link>
  </>
)
