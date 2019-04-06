import React from 'react'
import PropTypes from 'prop-types'

import { Flex1, FieldContainer, HBox, VBox, IconArrowDown } from '@ui/atoms'
import { FormLabel, FormAdornment } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled(Flex1)`
	height: 88px;
`

const StyledSelection = styled.div`
	border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};

  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
`;

export const SelectField = ({ label, value, disabled }) => {
	return (
    <Container>
    	<FormLabel children={label} />
    	<HBox height={theme.paddings.half} />
    	<FieldContainer>
    		<VBox />
    		<StyledSelection 
    			children={value}
    			disabled={disabled} 
    		/>
    		<FormAdornment children={<IconArrowDown/>} />
    	</FieldContainer>
    </Container>
  )
}

SelectField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	disabled: PropTypes.bool,

	// onChange: PropTypes.func.isRequired,
	// onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
}