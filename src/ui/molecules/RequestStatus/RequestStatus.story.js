import React from 'react'
import { storiesOf } from '@storybook/react'
import { RequestStatus } from './RequestStatus';
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module)
  .add('RequestStatus', () => (
  	<RequestStatus 
  	  message={text('message','Телефон отправляется')}
  	  error={boolean('error', false)}
  	  success={boolean('success', false)}
  	/>
  ))
