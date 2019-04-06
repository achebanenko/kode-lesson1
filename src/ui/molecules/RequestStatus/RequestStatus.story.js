import React from 'react'
import { storiesOf } from '@storybook/react'
import { RequestStatus } from './RequestStatus';
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module)
  .add('RequestStatus', () => (
  	<RequestStatus 
  	  children={text('children','Телефон отправляется')}
  	  danger={boolean('danger', false)}
  	  success={boolean('success', false)}
  	/>
  ))
