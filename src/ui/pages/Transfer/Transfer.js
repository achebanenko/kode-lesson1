import React from 'react'

import { styled } from '@ui/theme'
import { PageTemplate, HBox, Flex1, Divider, IconBack } from '@ui/atoms'
import { TextField, SelectField, Loader, TextareaField, CheckboxWithText, ButtonAccent, ButtonColor } from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

const Fieldset = styled.fieldset`
	margin: 0;
	padding: 0;
	border: none;
`

export const Transfer = ({ terms, ...storyProps }) => {
	return (
		<PageTemplate>
			<IconBack />
			<HBox />
			<form>
				<Fieldset disabled={storyProps.allFieldsDisabled}>
		      <Flex1>
		        <Wrapper>
		          <SelectField label="Страна 1" value={storyProps.country1} disabled={storyProps.allFieldsDisabled} />
							<HBox />
							<SelectField label="Страна 2" value={storyProps.country2} disabled={storyProps.allFieldsDisabled} />
						</Wrapper>

						{!storyProps.currency1 && !storyProps.currency2
							? (storyProps.country1 && storyProps.country2) && <Loader sync />
							: <Divider />
						}

						{storyProps.currency1 && storyProps.currency2
							? (<Wrapper>
								<HBox />
								<TextField label="Российский рубль (RUB)" value={storyProps.amount1} tip={storyProps.tipCurrency1} disabled={storyProps.allFieldsDisabled} />
			          <HBox />
			          <TextField label="Фунт стерлингов (GBP)" value={storyProps.amount2} tip={storyProps.tipCurrency2} disabled={storyProps.allFieldsDisabled} />
							</Wrapper>) : false
						}
						
						<Wrapper>
							<DeliveryTime label="Время доставки" from={storyProps.timeFrom} to={storyProps.timeTo} disabled={storyProps.allFieldsDisabled} />
							<HBox />
							<TextareaField label="Комментарий" value={storyProps.commentText} placeholder="Например, прошу представляться при звонке" disabled={storyProps.allFieldsDisabled} />
							<HBox />
							<CheckboxWithText text={terms} checked={storyProps.checkboxTermsChecked} disabled={storyProps.checkboxTermsDisabled || storyProps.allFieldsDisabled} />
						</Wrapper>
					</Flex1>

					<Wrapper>
						{storyProps.buttonDisabled
							? <ButtonColor disabled={storyProps.buttonDisabled} children="Отправить" />
							: <ButtonAccent loading={storyProps.buttonLoading} children="Отправить" />
						}
		      </Wrapper>
		    </Fieldset>
      </form>
		</PageTemplate>
	)
}

Transfer.defaultProps = {
	terms: <p>Со всеми <a href="//link">условиями</a> согласен вторая строка вторая строка</p>
}