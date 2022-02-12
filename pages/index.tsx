import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Container, Center, Grid, Stack } from '@chakra-ui/react'
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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Center>
				<Container minWidth="90%" bgColor={'blue.50'} m={3} p={0}>
					<Center>
						<Stack direction={['column', 'row']} my={5} spacing={4}>
							<Center>
								<MotionLogo
									src="/logo/open-box-128.png"
									alt="logo"
									mr={{ xs: 6, '2xl': 20 }}
									width={16}
								/>
							</Center>
							<Center>
								<Heading
									color="blue.500"
									fontSize={['2xl', null, '3xl', '4xl']}
								>
									Workbox Utilities
								</Heading>
							</Center>
						</Stack>
					</Center>
					<Grid
						w="full"
						templateColumns={['repeat(1,1fr)', null, 'repeat(2, 1fr)']}
						rowGap={[50, 50, 10, 20]}
						columnGap={[0, 100, 10]}
						mt={8}
						px={4}
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
