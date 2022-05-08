import { background } from "@chakra-ui/react";

export const Link = {
    baseStyle: {
        fontWeight: 'bold',
    },
    sizes: {},
    variants: {
        rePensaLink: {
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "white",
            _hover: {
                textDecoration: "none"
            },
            _focus: {
                
            }
        },
        rePensaLinkMobileMenu: {
            cursor: "pointer",
            textDecoration: "none",
            outline: "none",
            color: "white",
            fontSize: 'md',
            _hover: {
                textDecoration: "none"
            },
            _focus: {
                
            }
        }
    }
}