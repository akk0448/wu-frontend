import { Center, GridItem, Heading } from '@chakra-ui/react'
import UtilityButton, { IUtility } from './UtilityButton'

export interface UtilityBoxProps {
	heading: string
	utilities: IUtility[]
}

const UtilityBox: React.FC<UtilityBoxProps> = ({ heading, utilities }) => {
	const getAllUtilities = (utilities: IUtility[]) => {
		const utilityComponents = utilities.map((utility, key) => {
			return <UtilityButton utility={utility} key={key} />
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
