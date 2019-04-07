import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'

export const HBox = styled.div`
  height: ${props => (props.half && props.height / 2) || props.height}px;
`

HBox.propTypes = {
  height: PropTypes.number,
  half: PropTypes.bool,
}

HBox.defaultProps = {
  height: theme.paddings.main
}
