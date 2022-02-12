import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
