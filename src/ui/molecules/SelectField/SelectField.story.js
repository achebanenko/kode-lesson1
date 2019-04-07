import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectField } from './SelectField';
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const actions = {
	onClick: action('onClick'),
}

storiesOf('ui/molecules', module)
  .add('SelectField', () => (
  	<SelectField {...actions}
  	  label={text('label','Страна 1')}
  	  value={select('value', { selected: 'Англия', empty: null, 'too long': 'Соединенное Королевство Великобритании и Северной Ирландии' }, 'Россия')}
  	  disabled={boolean('disabled', false)}
  	/>
  ))