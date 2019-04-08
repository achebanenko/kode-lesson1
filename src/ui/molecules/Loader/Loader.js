import React from 'react'
import PropTypes from 'prop-types'

import { AnimationLoader, Flex1 } from '@ui/atoms'
import { styled, theme } from '@ui/theme'

const Container = styled(Flex1)`
	align-items: center;
`

export const Loader = ({ sync }) => (
  <Container>
    <AnimationLoader fill={sync && theme.pallete.radicalRed} />
  </Container>
)

Loader.propTypes = {
  sync: PropTypes.bool,
  /** Makes color radical to show sync call under the hood */
}