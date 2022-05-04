import { 
  Box, 
  Link, 
  Image, 
  Button} from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/images/logoRepensa.svg'
import { style } from '../../utilis/styles/style'

export default function Navigator() {
  return (
    <>
      <Box
        minWidth={'fit-content'}
        minHeight={'20vh'}
        bg={'#003B70'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
        gap={5}
      >
        <Box>
          <Link href='/home'><Image boxSize={'-moz-initial'} src={logo} alt={'logo'}/></Link>
        </Box>
        <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={5}
        >
          <Link style={style.text} _hover={''} isTruncated minWidth={'fit-content'}>Quem Somos</Link>
          <Link style={style.text} _hover={''} isTruncated minWidth={'fit-content'}>RePensar</Link>
          <Link style={style.text} _hover={''} isTruncated minWidth={'fit-content'}>ReAproveitar</Link>
          <Link style={style.text} _hover={''} isTruncated minWidth={'fit-content'}>Empresas Parceiras</Link>
        </Box>
        <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={5}
        >
          <Button 
          variant={'rePensaGreenButton'} 
          borderRadius={20} 
          textAlign='center'
          >Entrar</Button>
          <Button 
          variant={'rePensaBlueButton'} 
          borderRadius={20}
          textAlign='center'
          >Sou Instituição</Button>
        </Box>
      </Box>
    </>
  )
}
