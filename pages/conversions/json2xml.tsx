import { Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

import PageLayout from '../../components/PageLayout'
import TextInput, { TextInputProps } from '../../components/TextInput'
import TextPreview, { TextPreviewProps } from '../../components/TextPreview'
import { jsonFormatter, xmlFormatter } from '../../utils/formatter.util'

export interface JsonToXmlProps {}

const Json2xml: React.FC<JsonToXmlProps> = () => {
	const [output, setOutput] = useState('')
	const [input, setInput] = useState('')

	const fetchRes = async (inp: string): Promise<string> => {
		const res = await axios.post('/conversions/json2xml', inp, {
			headers: {
				'Content-Type': 'application/json',
				Acccept: '*/*',
			},
		})
		return res.data
	}

	const conversionHandler = () => {
		fetchRes(input).then((out) => setOutput(xmlFormatter(out)))
	}

	const fileUploadHandler = (e: any) => {
		if (e.target.files.length > 1) {
			alert('max one file can be uploaded')
			return
		}
		const file: File = e.target.files[0]
		file.text().then((fileInputStr) => {
			setInput(jsonFormatter(fileInputStr))
		})
	}

	const textInputProps: TextInputProps = {
		input,
		inputType: 'json',
		setInputFn: setInput,
		conversionHandlerFn: conversionHandler,
		fileUploadHandlerFn: fileUploadHandler,
		stackProps: {
			w: '90%',
			h: '100%',
		},
	}

	const textPreviewProps: TextPreviewProps = {
		output,
		outputType: 'xml',
		placeholder: `XML output`,
		setoutputfn: setOutput,
		stackProps: {
			w: '90%',
			h: '100%',
		},
	}

	return (
		<PageLayout
			title="Workbox Utilities - JSON to XML"
			desc="Utility to convert JSON to XML"
		>
			<Grid
				m={[0, 4]}
				minH={['800px', null, '400px', '500px']}
				templateColumns={['repeat(1,1fr)', null, 'repeat(2,1fr)']}
				rowGap={8}
			>
				<GridItem
					d={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<TextInput {...textInputProps} />
				</GridItem>
				<GridItem d={'flex'} alignItems={'center'} justifyContent={'center'}>
					<TextPreview {...textPreviewProps} />
				</GridItem>
			</Grid>
		</PageLayout>
	)
}

export default Json2xml
