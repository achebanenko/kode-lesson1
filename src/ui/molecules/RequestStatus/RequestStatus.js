import React from 'react'
import PropTypes from 'prop-types'

import { Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { styled, theme } from '@ui/theme'

const Container = styled(Flex1)`
	align-items: center;
`

const ContextualColor = styled(Body2)`
  color: 
    ${(props) => (
      !props.success && !props.danger
        ? theme.pallete.lightGray
        : (props.danger && theme.pallete.errorColor)
          || (props.success && theme.pallete.successColor)
    )};
`

export const RequestStatus = ({ children, success, danger }) => {
  return (
    <Container>
      <ContextualColor success={success} danger={danger}>
        {children}
      </ContextualColor>
    </Container>
  )
}

RequestStatus.propTypes = {
  children: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool
}
