import { createGlobalStyle } from 'styled-components'
import { theme } from '@ui/theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat';
    font-weight: normal;
    color: ${props => props.theme.pallete.gray2};
  }
  a {
    color: ${props => props.theme.pallete.radicalRed};
    text-decoration: none;
  }
`
