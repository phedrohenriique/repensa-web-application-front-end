import React from 'react'
import {
    Box,
    Menu,
    MenuButton,
    Button,
    Icon,
    Link,
    Image
} from '@chakra-ui/react'
import logo from '../../assets/images/logoRepensa.svg'
import { MenuIcon } from '@heroicons/react/outline'

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
                        <Button border={''} variant={'rePensaBlueButton'} >
                            <Icon as={MenuIcon} />
                        </Button >
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
