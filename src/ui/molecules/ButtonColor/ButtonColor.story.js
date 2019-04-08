import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonColor } from './ButtonColor'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('ButtonColor', () => (
  <ButtonColor
  	label="Отправить"
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    onPress={action('press')}
  />
), {
	info: { inline: true, text: 'Цветная кнопка + label вместо children'}
})
