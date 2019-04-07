import React, { Fragment } from 'react'

import { styled } from '@ui/theme'
import { PageTemplate, HBox, Flex1, Divider, IconBack } from '@ui/atoms'
import { TextField, SelectField, Loader, TextareaField, CheckboxWithText, ButtonAccent, ButtonColor } from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Transfer = ({ terms, ...storyProps }) => {
	return (
		<PageTemplate>
			<IconBack />
			<HBox />
      <Flex1>
        <Wrapper>
          <SelectField label="Страна 1" value={storyProps.country1} />
					<HBox />
					<SelectField label="Страна 2" value={storyProps.country2} />
				</Wrapper>

				{!storyProps.currency1 && !storyProps.currency2
					? (storyProps.country1 && storyProps.country2) && <Loader sync />
					: <Divider />
				}

				{storyProps.currency1 && storyProps.currency2
					? (<Wrapper>
						<HBox />
						<TextField label="Российский рубль (RUB)" value={storyProps.amount1} tip={storyProps.tipCurrency1} />
	          <HBox />
	          <TextField label="Фунт стерлингов (GBP)" value={storyProps.amount2} tip={storyProps.tipCurrency2} />
					</Wrapper>) : false
				}
				
				<Wrapper>
					<DeliveryTime label="Время доставки" from={storyProps.timeFrom} to={storyProps.timeTo} />
					<HBox />
					<TextareaField label="Комментарий" value={storyProps.commentText} placeholder="Например, прошу представляться при звонке" />
					<HBox />
					<CheckboxWithText checked={storyProps.checkedTerms} text={terms} />
				</Wrapper>
			</Flex1>

			<Wrapper>
				{storyProps.disabledButton 
					? <ButtonColor disabled={storyProps.disabledButton} children="Отправить" />
					: <ButtonAccent loading={storyProps.loadingButton} children="Отправить" />
				}
      </Wrapper>
		</PageTemplate>
	)
}

Transfer.defaultProps = {
	terms: <p>Со всеми <a href="//link">условиями</a> согласен вторая строка вторая строка</p>
}