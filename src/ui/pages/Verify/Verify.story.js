import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Verify } from './Verify'
import { TextField, RequestStatus } from '@ui/molecules'

const ByDefault = () => (
	<TextField label="Код" placeholder="1234" />
)
const Invalid = () => (
	<Fragment>
		<TextField label="Код" value="12п5" errorMessage="Неверный код подтверждения" />
		<RequestStatus children="&nbsp;"/>
	</Fragment>
)
// ?How to deal with reserved empty space
const Sending = () => (
	<Fragment>
		<TextField label="Код" status="loading" value="3456" />
		<RequestStatus children="Код отправляется" />
	</Fragment>
)
const Success = () => (
	<Fragment>
		<TextField label="Код" status="success" value="3456" />
		<RequestStatus success>Код успешно отправлен</RequestStatus>
	</Fragment>
)

storiesOf('ui/pages', module)
	.add('Verify/2.0 No code', () => <Verify story={ByDefault()} />)
	.add('Verify/2.2 Invalid', () => <Verify story={Invalid()} />)
	.add('Verify/2.4 Sending', () => <Verify story={Sending()} />)
	.add('Verify/2.6 Success', () => <Verify story={Success()} />)
