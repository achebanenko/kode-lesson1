import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'

export const VBox = styled.div`
  /* width: ${props => props.width}px; */
  width: ${props => (props.half && props.width / 2) || props.width}px;
`

VBox.propTypes = {
  width: PropTypes.number,
  half: PropTypes.bool,
}

VBox.defaultProps = {
  width: theme.paddings.main,
}

