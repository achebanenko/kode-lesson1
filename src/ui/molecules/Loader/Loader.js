import React from 'react'
import PropTypes from 'prop-types'

import { IconLoader, Flex1 } from '@ui/atoms'
import { styled, keyframes } from '@ui/theme'

/*
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
*/

/*
const AnimatedLoader = styled(IconLoader)`
  animation: ${rotate} 2s linear infinite
`
*/

const AnimatedLoader = styled(IconLoader)`
  animation: rotate 2s linear infinite;

	@keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loader = () => {

  return (
    <Flex1>
      <AnimatedLoader/>
    </Flex1>
  )
}

/*
TextField.propTypes = {

}
*/