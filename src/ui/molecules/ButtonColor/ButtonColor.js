import React from 'react'
import PropTypes from 'prop-types'
import { theme, styled } from '@ui/theme'
import { AnimationLoader } from '@ui/atoms'
import { ButtonText } from '@ui/atoms/Typography'

const Button = styled('div')`
  background: ${({ disabled, theme }) =>
    disabled ? "rgba(0, 0, 0, .15)" : theme.pallete.radicalRed};
  
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
`

export const ButtonColor = ({ loading, disabled, children, onPress }) => (
  <Button
    disabled={disabled}
    loading={loading}
    onClick={loading || disabled ? () => undefined : onPress}
  >
    {loading 
      ? <AnimationLoader fill={theme.pallete.white} />
      : <ButtonText 
          children={children}
          color={disabled ? theme.pallete.grey : theme.pallete.white}
        />
    }
  </Button>
)

ButtonColor.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}