import React from 'react'

import { AnimationLoader, Flex1 } from '@ui/atoms'
import { styled, theme } from '@ui/theme'

export const Loader = ({ sync }) => (
  <Flex1>
    <AnimationLoader fill={sync && theme.pallete.radicalRed} />
  </Flex1>
)