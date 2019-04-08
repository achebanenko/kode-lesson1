import React from 'react'
import { storiesOf } from '@storybook/react'
import { Loader } from './Loader'
import { boolean } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module)
  .add('Loader', () => (
  	<Loader
  		sync={boolean('sync', true)}
  	/>
  ), {
  	info: { inline: true, text: 'Анимация при загрузке данных'}
  })
