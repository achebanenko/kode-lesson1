import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextareaField } from './TextareaField';
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module)
  .add('TextareaField', () => (
  	<TextareaField 
  	  label={text('label','Комментарий')}
  	  placeholder={text('placeholder','Например, прошу представляться при звонке')}
  	  disabled={boolean('disabled', false)}
  	/>
  ))