import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Header from './Header'

export interface PageLayoutProps {
	title: string
	desc: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, desc }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={desc} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Container minW="100vw" minH="100vh" bgColor={'gray.50'} px={3}>
				<Header />
				{children}
			</Container>
		</>
	)
}

export default PageLayout
