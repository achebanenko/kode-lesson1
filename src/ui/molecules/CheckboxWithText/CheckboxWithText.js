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

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const TextContainer = styled(Body2)`

`

export const CheckboxWithText = ({ text, checked, disabled, onClick }) => {
	const handleClick = e => {
    if (onClick) onClick(e)
  }
	return (
		<Container>
			<CheckboxContainer onClick={handleClick}>
				<HiddenCheckbox checked={checked} />
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

	onClick: PropTypes.func.isRequired,
}