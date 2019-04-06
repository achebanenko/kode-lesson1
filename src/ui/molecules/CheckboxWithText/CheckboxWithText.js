import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox, VBox } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { styled } from '@ui/theme'

const Container = styled.div`
	display: flex;
	align-items: center;
`

const CheckboxContainer = styled.div`
	cursor: pointer;
`

const TextContainer = styled(Body2)`

`

export const CheckboxWithText = ({ text, checked, disabled }) => {
	return (
		<Container>
			<CheckboxContainer>
				<Checkbox checked={checked} disabled={disabled} />
			</CheckboxContainer>
			<VBox/>
			<TextContainer children={text} />
		</Container>
	)
}


CheckboxWithText.propTypes = {
	text: PropTypes.node.isRequired,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
}