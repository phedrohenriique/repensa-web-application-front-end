import React from 'react'
import {
    Box,
    Link,
    Image,
    Button,
    MenuItem
} from '@chakra-ui/react'
import logo from '../../assets/images/logoRepensa.svg'
import { style } from '../../utilis/styles/style'

export default function DesktopNavigator() {
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

                <Link href='/home'>
                    <Image
                        paddingLeft={2}
                        maxWidth={200}
                        src={logo}
                        alt={'logo'} />
                </Link>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={5}
                >
                    <Box style={style.flexTextRowCenter} h={10} _hover={style.hoverMainMenuDesktop}><Link padding={2} variant={'rePensaLink'} isTruncated minWidth={'fit-content'}>Quem Somos</Link></Box>
                    <Box style={style.flexTextRowCenter} h={10} _hover={style.hoverMainMenuDesktop}><Link padding={2} variant={'rePensaLink'} isTruncated minWidth={'fit-content'}>RePensar</Link></Box>
                    <Box style={style.flexTextRowCenter} h={10} _hover={style.hoverMainMenuDesktop}><Link padding={2} variant={'rePensaLink'} isTruncated minWidth={'fit-content'}>ReAproveitar</Link></Box>
                    <Box style={style.flexTextRowCenter} h={10} _hover={style.hoverMainMenuDesktop}><Link padding={2} variant={'rePensaLink'} isTruncated minWidth={'fit-content'}>Empresas Parceiras</Link></Box>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={5}
                    paddingRight={2}
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
