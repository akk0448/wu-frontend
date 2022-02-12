import { extendTheme } from '@chakra-ui/react'
import breakPoints from './breakpoints'

const theme = extendTheme({
	styles: {
		global: {
			html: {
				fontSize: '16px',
			},
		},
	},
	breakPoints,
})

export default theme
/**
 * 574AE2
 * 00ABE7
 * 2DC7FF
 * 080708
 * 28262C
 */
