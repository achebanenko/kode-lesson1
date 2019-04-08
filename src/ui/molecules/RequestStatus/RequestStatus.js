import React from 'react'
import PropTypes from 'prop-types'

import { Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { styled } from '@ui/theme'

const Container = styled(Flex1)`
	align-items: center;
`

const ContextualColor = styled(Body2)`
  color: 
    ${({success, error, theme}) => (
      !success && !error
        ? theme.pallete.lightGray
        : (error && theme.pallete.errorColor)
          || (success && theme.pallete.successColor)
    )};
`

export const RequestStatus = ({ message, success, error }) => {
  return (
    <Container>
      <ContextualColor success={success} error={error}>
        {message}
      </ContextualColor>
    </Container>
  )
}

RequestStatus.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
  error: PropTypes.bool
}
