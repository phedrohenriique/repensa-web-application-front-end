import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopNavigator from './DesktopNavigator'
import MobileNavigator from './MobileNavigator'

export default function Navigator() {
  const [mediaQuery] = useMediaQuery('(max-width: 460px)') // result is a boolean
  console.log(mediaQuery)
  return (
    <>
      { !mediaQuery 
      ? <DesktopNavigator />
      : <MobileNavigator />
    }
    </>
  )
}
