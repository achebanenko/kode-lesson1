import { styled } from '@ui/theme'

export const FieldContainer = styled.div`
  box-sizing: border-box;
  /* padding-left: ${({theme}) => theme.paddings.main}px; */
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 
    1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`