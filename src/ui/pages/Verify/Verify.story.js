import React from 'react'
import { storiesOf } from '@storybook/react'

import { Verify } from './Verify'
import { TextField, RequestStatus } from '@ui/molecules'

const ByDefault = () => (
	<TextField label="Код" placeholder="1234" />
)
// ?How to deal with empty space (reserve or not)
const Invalid = () => (
	<div>
		<TextField label="Код" value="12п5" errorMessage="Неверный код подтверждения" />
		<RequestStatus message="&nbsp;"/>
	</div>
)
const Sending = () => (
	<div>
		<TextField label="Код" status="loading" value="3456" />
		<RequestStatus message="Код отправляется" />
	</div>
)
const Success = () => (
	<div>
		<TextField label="Код" status="success" value="3456" />
		<RequestStatus success message="Код успешно отправлен" />
	</div>
)

storiesOf('ui/pages', module)
	.addParameters({ info: { inline:  true } })
	.add('Verify/2.0 No code', () => <Verify story={ByDefault()} />, { info: { text: 'Ввод кода' } })
	.add('Verify/2.2 Invalid', () => <Verify story={Invalid()} />, { info: { text: 'Ошибка валидации'} })
	.add('Verify/2.4 Sending', () => <Verify story={Sending()} />, { info: { text: 'Состояние загрузки'} })
	.add('Verify/2.6 Success', () => <Verify story={Success()} />, { info: { text: 'Успех'} })
