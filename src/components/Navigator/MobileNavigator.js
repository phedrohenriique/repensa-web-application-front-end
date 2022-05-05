import React from 'react'
import {
    Box,
    Menu,
    MenuButton,
    Button,
    Icon,
    Link,
    Image,
    MenuList,
    MenuItem,
    Text,
    useOutsideClick
} from '@chakra-ui/react'
import logo from '../../assets/images/logoRepensa.svg'
import { style } from '../../utilis/styles/style'
import { MenuIcon } from '@heroicons/react/outline'

// Menu item is has _focus prop changing him becaouse it was clicked before in menu
// Mobile just have the click event option _hover prop isnt good to be used

export default function MobileNavigator() {

    return (
        <>
            <Box
                minWidth={'fit-content'}
                minHeight={'20vh'}
                bg={'#003B70'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={5}
            >
                <Box paddingLeft={2}>
                <Menu>
                        <MenuButton as={Button} border={''} variant={'rePensaBlueButton'} >
                            <Icon as={MenuIcon} />
                        </MenuButton >
                         <MenuList bg={'#003B70'} padding={2}>
                            <MenuItem _active={''} _focus={style.hoverMainMenuMobile}><Link variant={'rePensaLink'} href={'/home'}>Quem Somos</Link></MenuItem>
                            <MenuItem _active={''} _focus={style.hoverMainMenuMobile}><Link variant={'rePensaLink'} href={''}>RePensar</Link></MenuItem>
                            <MenuItem _active={''} _focus={style.hoverMainMenuMobile}><Link variant={'rePensaLink'} href={''}>ReAproveitar</Link></MenuItem>
                            <MenuItem _active={''} _focus={style.hoverMainMenuMobile}><Link variant={'rePensaLink'} href={''}>Empresas Parceiras</Link></MenuItem>
                            <Box
                                paddingTop={20}
                                paddingBottom={5}
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'flex-start'}
                                justifyContent={'center'}
                                gap={2}
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
                            <Text color={'white'}>Não tem uma Conta? <Link variant={'rePensaLinkMobileMenu'}>Cadastre-se</Link></Text>
                        </MenuList> 
                    </Menu>
                </Box>
                <Link href='/home'>
                    <Image
                        paddingRight={2}
                        maxWidth={200}
                        src={logo}
                        alt={'logo'} />
                </Link>
            </Box>
        </>
    )
}
