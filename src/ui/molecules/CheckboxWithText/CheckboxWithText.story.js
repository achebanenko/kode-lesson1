import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckboxWithText } from './CheckboxWithText'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module)
	.add('CheckboxWithText', () => (
			<CheckboxWithText 
				checked={boolean('checked', false)}
				disabled={boolean('disabled', false)}
				text={text('text', <p>Со всеми <a href="//link">условиями</a> согласен вторая строка вторая строка</p>)}

			/>
		), {
			knobs: {
   	  	escapeHTML: false
   		}
   	}
  )