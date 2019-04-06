import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from './SelectField';
import { text, boolean, select } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module)
  .add('SelectField', () => (
  	<SelectField 
  	  label={text('label','Страна 1')}
  	  value={select('value', { selected: 'Англия', empty: null, 'too long': 'Соединенное Королевство Великобритании и Северной Ирландии' }, 'Россия')}
  	  disabled={boolean('disabled', false)}
  	/>
  ))