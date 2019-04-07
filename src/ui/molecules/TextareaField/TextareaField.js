import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Flex1, FieldContainer, HBox } from '@ui/atoms'
import { FormLabel } from '@ui/molecules'
import { styled } from '@ui/theme'

const Container = styled(Flex1)`
	height: 125px;
`

const TextareaContainer = styled(FieldContainer)`
  height: 101px;
  flex-direction: column;
`

const StyledTextarea = styled.textarea`
	border: none;
  background-color: transparent;
  height: 101px;
  padding: ${({ theme }) => theme.paddings.main}px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ disabled, theme }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 18px;
  }
  resize: none;
`;

export const TextareaField = ({ label, value, placeholder, disabled, onFocus, onBlur }) => {
  
  const [focused, setFocused] = useState(false)

  const handleFocus = e => {
    if (onFocus) onFocus(e)
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) onBlur(e)
    setFocused(false)
  }

	return (
    <Container>
    	<FormLabel children={label} />
    	<HBox half />
    	<TextareaContainer focused={focused}>
        <StyledTextarea 
    			value={value}
          placeholder={placeholder}
          disabled={disabled} 
          onFocus={handleFocus}
          onBlur={handleBlur}
    		/>
    	</TextareaContainer>
    </Container>
  )
}

TextareaField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
  placeholder: PropTypes.string,
	disabled: PropTypes.bool,

	// onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}