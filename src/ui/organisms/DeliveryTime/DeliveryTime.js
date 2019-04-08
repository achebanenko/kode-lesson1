import React from 'react'
import PropTypes from 'prop-types'

import { FormLabel, TextField } from '@ui/molecules'
import { Flex1, HBox, VBox } from '@ui/atoms'
import { Body1 } from '@ui/atoms/Typography'
import { styled } from '@ui/theme'

const Container = styled(Flex1)`
	height: 88px;
`

const InnerContainer = styled.div`
	display: flex;
	> * {
		height: 40px;
	}
`

const Dash = styled(Body1)`
	display: flex;
	align-items: center;
`

export const DeliveryTime = ({ label, from, to, disabled }) => {
	return (
		<Container>
			<FormLabel children={label} />
			<HBox half />

			<InnerContainer>
				<TextField notStandalone
					disabled={disabled} 
					startAdornment="с"
					value={from}
				/>
				
				<VBox half />
				<Dash>&mdash;</Dash>
				<VBox half />
				
				<TextField notStandalone 
					disabled={disabled} 
					startAdornment="до"
					value={to}
				/>
			</InnerContainer>
		</Container>
	)
}

DeliveryTime.propTypes = {
	label: PropTypes.string,
	from: PropTypes.string,
	to: PropTypes.string,
	disabled: PropTypes.bool,
}