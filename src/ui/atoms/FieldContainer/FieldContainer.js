import { styled, theme } from '@ui/theme'

export const FieldContainer = styled.div`
  box-sizing: border-box;
  /* padding-left: ${theme.paddings.main}px; */
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 
    1px
    ${({ error, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`