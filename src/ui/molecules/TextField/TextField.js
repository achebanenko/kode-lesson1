import React, { Fragment, useState } from 'react' 
import PropTypes from 'prop-types'

import { FieldContainer, HBox, VBox, IconSuccess, AnimationLoader } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment } from '@ui/molecules'
import { styled } from '@ui/theme'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ disabled, theme }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 44px;
  }
`

export const TextField = ({
  startAdornment,
  status,
  disabled,
  placeholder,
  label,
  errorMessage,
  value,
  tip,
  valid,
  onChange,
  onBlur,
  onFocus,
  notStandalone
}) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      {!notStandalone && (<Fragment>
        <FormLabel children={label} valid={valid} />
        <HBox half />
      </Fragment>)}

      <FieldContainer focused={focused} errorMessage={errorMessage}>
        {startAdornment 
          ? <FormAdornment children={startAdornment} /> 
          : <VBox />
        }
        <StyledInput
          placeholder={placeholder ? placeholder : ''}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FormAdornment>
          {status === 'loading' ? <AnimationLoader /> : null}
          {status === 'success' ? <IconSuccess /> : null}
        </FormAdornment>
      </FieldContainer>

      {!notStandalone && (<Fragment>
        <HBox half />
        {errorMessage 
          ? <InputError children={errorMessage} /> 
          : <InputTip children={tip} />
        }
      </Fragment>)}
    </Container>
  )
}

TextField.propTypes = {
  status: PropTypes.oneOf(['loading', 'success']),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  startAdornment: PropTypes.node,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  notStandalone: PropTypes.bool,
}
