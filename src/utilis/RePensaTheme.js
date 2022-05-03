import React from 'react'
import { extendTheme } from '@chakra-ui/react'


export const componentStyle = {
    baseStyle: {},
    sizes: {},
    variants: {},
    defaultProps: {}
}
export const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
            },
            sizes: {},
            variants: {
                rePensa: {
                    bg: '#003B70',
                    color: 'white'
                }
            },
            defaultProps: {}
        }
    }
})