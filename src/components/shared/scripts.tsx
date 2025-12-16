import React from 'react'
import { Script } from 'gatsby'
import { GoogleTag } from './scripts/GoogleTag'
import { FacebookTag } from './scripts/FacebookTag'
import { Gtag } from './scripts/Gtag'

export const Scripts = () => {
  return (
    <>
      <Gtag />
      <GoogleTag />
      <FacebookTag />
    </>
  )
}
