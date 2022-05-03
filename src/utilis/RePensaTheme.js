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
                rePensaBlueButton: {
                    bg: '#003B70',
                    color: 'white',
                    border: '2px solid white'
                },
                rePensaGreenButton: {
                    bg: '#7ADFA5',
                    color: 'black'
                },
                rePensaWhiteButton: {
                    bg: 'white',
                    color: '#003B70',
                    border: '2px solid #003B70'
                }
            },
            defaultProps: {}
        }
    }
})

// exporting with ES6 shall be done in the variable itself and imported with import {} from 'path'