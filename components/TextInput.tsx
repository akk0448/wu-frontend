import {
	Button,
	ButtonGroup,
	IconButton,
	StackProps,
	Textarea,
	VStack,
	Heading,
} from '@chakra-ui/react'
import React from 'react'
import { MdRefresh, MdUpload } from 'react-icons/md'
import { jsonFormatter } from '../utils/formatter.util'

export interface TextInputProps {
	inputType: string
	setInputFn: React.Dispatch<React.SetStateAction<string>>
	input: string
	conversionHandlerFn: () => void
	fileUploadHandlerFn: (e: any) => void
	stackProps?: StackProps
}

const TextInput: React.FC<TextInputProps> = ({
	inputType,
	input,
	setInputFn,
	conversionHandlerFn,
	fileUploadHandlerFn,
	stackProps,
}) => {
	return (
		<VStack {...stackProps} spacing={4}>
			<Heading color={'brand.secondary.500'}>Input</Heading>
			<Textarea
				flex={1}
				bg={'blackAlpha.800'}
				color={'whiteAlpha.800'}
				placeholder={`Enter ${inputType.toUpperCase()}`}
				value={input}
				onChange={(e) => setInputFn(e.target.value)}
			/>

			<ButtonGroup>
				<Button onClick={conversionHandlerFn} disabled={input.trim() === ''}>
					Convert
				</Button>
				<Button
					onClick={() => setInputFn((old) => jsonFormatter(old))}
					disabled={input === ''}
				>
					Prettify
				</Button>
				<IconButton
					onClick={() => setInputFn('')}
					icon={<MdRefresh />}
					aria-label={'Refresh'}
				/>
				<IconButton
					as={'label'}
					htmlFor={'file-upload'}
					icon={<MdUpload />}
					aria-label={'Upload file'}
				/>
				<input
					id="file-upload"
					name="file-upload"
					type="file"
					style={{ display: 'none' }}
					accept={`.${inputType.toLowerCase()}`}
					onInput={fileUploadHandlerFn}
				/>
			</ButtonGroup>
		</VStack>
	)
}

export default TextInput
