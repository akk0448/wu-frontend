import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Container, Center, HStack, Grid } from '@chakra-ui/react'
import UtilityBox, { UtilityBoxProps } from '../components/UtilityBox'
import MotionLogo from '../components/MotionLogo'

const Home: NextPage = () => {
	const conversionProps: UtilityBoxProps = {
		heading: 'Conversions',
		utilities: [
			{ name: 'XML to JSON', linkTo: '/conversions/xml2json' },
			{ name: 'JSON to XML', linkTo: '/conversions/json2xml' },
			{ name: 'JSON to POJO', linkTo: '/conversions/json2pojo' },
			{ name: 'POJO to JSON', linkTo: '/conversions/pojo2json' },
		],
	}

	const jsonProps: UtilityBoxProps = {
		heading: 'Json Utility',
		utilities: [
			{ name: 'Difference b/w Jsons', linkTo: '/json/difference' },
			{ name: 'Add key to Jsons', linkTo: '/json/addkey' },
			{ name: 'Remove key from Jsons', linkTo: '/json/removekey' },
		],
	}

	const otherProps: UtilityBoxProps = {
		heading: 'Other Utilities',
		utilities: [
			{ name: 'Date', linkTo: '/other/date' },
			{ name: 'SMS', linkTo: '/other/sms' },
			{ name: 'Currency', linkTo: '/other/currency' },
		],
	}

	const exportImportProps: UtilityBoxProps = {
		heading: 'Export/Import Utility',
		utilities: [
			{ name: 'CSV to PDF', linkTo: '/data/csv2pdf' },
			{ name: 'EXCEL to PDF', linkTo: '/data/excel2pdf' },
			{ name: 'CSV to EXCEL', linkTo: '/data/csv2excel' },
			{ name: 'EXCEL to CSV', linkTo: '/data/excel2csv' },
		],
	}

	return (
		<div>
			<Head>
				<title>Workbox Utilities - Technocrats</title>
				<meta name="description" content="Workbox Utilities by Technocrats" />
			</Head>
			<Center>
				<Container minWidth="container.xl" m={3} p={0}>
					<Center>
						<HStack my={5} spacing={4}>
							<MotionLogo
								src="/logo/open-box-128.png"
								alt="logo"
								mr={6}
								width={16}
							/>
							<Heading color="blue.500" fontSize={'4xl'}>
								Workbox Utilities - Technocrats
							</Heading>
						</HStack>
					</Center>
					<Grid
						w="full"
						templateColumns="repeat(2, 1fr)"
						rowGap={100}
						columnGap={200}
						mt={8}
					>
						<UtilityBox
							heading={conversionProps.heading}
							utilities={conversionProps.utilities}
						/>
						<UtilityBox
							heading={jsonProps.heading}
							utilities={jsonProps.utilities}
						/>
						<UtilityBox
							heading={otherProps.heading}
							utilities={otherProps.utilities}
						/>
						<UtilityBox
							heading={exportImportProps.heading}
							utilities={exportImportProps.utilities}
						/>
					</Grid>
				</Container>
			</Center>
		</div>
	)
}

export default Home
