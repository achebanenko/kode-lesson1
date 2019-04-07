import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextareaField } from './TextareaField';
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const actions = {
	onFocus: action('onFocus'),
  onBlur: action('onBlur')
}

storiesOf('ui/molecules', module)
  .add('TextareaField', () => (
  	<TextareaField {...actions}
  	  label={text('label','Комментарий')}
  	  //value={text('value','Какой-то текст от пользователя')}
  	  placeholder={text('placeholder','Например, прошу представляться при звонке')}
  	  disabled={boolean('disabled', false)}
  	/>
  ))