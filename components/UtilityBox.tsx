import { Button, Center, GridItem, Heading } from '@chakra-ui/react'

import Link from 'next/link'

export interface IUtility {
	name: string
	linkTo: string
}

export interface UtilityBoxProps {
	heading: string
	utilities: IUtility[]
}

const UtilityBox: React.FC<UtilityBoxProps> = ({ heading, utilities }) => {
	const getAllUtilities = (utilities: IUtility[]) => {
		const utilityComponents = utilities.map((utility, key) => {
			return (
				<Link href={utility.linkTo} passHref key={key}>
					<Button mb={4}>{utility.name}</Button>
				</Link>
			)
		})
		return utilityComponents
	}

	return (
		<Center>
			<GridItem
				w={'full'}
				h={'full'}
				d="flex"
				borderRadius={8}
				alignItems="center"
				flexDirection="column"
				bgColor={'darkgray'}
				p={4}
			>
				<Heading fontSize="3xl" mb={6}>
					{heading}
				</Heading>
				{getAllUtilities(utilities)}
			</GridItem>
		</Center>
	)
}

export default UtilityBox
