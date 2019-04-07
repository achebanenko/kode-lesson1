import React from 'react'

import { styled } from '@ui/theme'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, RequestStatus } from '@ui/molecules'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Verify = ({ story }) => {
	return (
		<PageTemplate>
			<Header title="Введите код" />
      <Divider />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
					<Body2 children="На указанный телефон выслан код подтверждения" />
					<HBox height={20} />
					{story 
						? story
						: (<>
								<TextField/>
								<RequestStatus/>
							</>)
					}
				</Wrapper>
			</Flex1>
		</PageTemplate>
	)
}