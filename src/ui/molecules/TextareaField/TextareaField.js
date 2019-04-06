import React from 'react'
import PropTypes from 'prop-types'

import { Flex1, FieldContainer, HBox } from '@ui/atoms'
import { FormLabel } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled(Flex1)`
	height: 125px;
`

const TextareaContainer = styled(FieldContainer)`
  height: 101px;
  padding: ${theme.paddings.main}px;
  flex-direction: column;
`

const StyledTextarea = styled.textarea`
	border: none;
  background-color: transparent;
  height: 101px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 18px;
  }
  resize: none;
`;

export const TextareaField = ({ label, value, placeholder, disabled }) => {
	return (
    <Container>
    	<FormLabel children={label} />
    	<HBox height={theme.paddings.half} />
    	<TextareaContainer>
        <StyledTextarea 
    			children={value}
          placeholder={placeholder}
          disabled={disabled} 
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
	// onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
}