import styled from 'styled-components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const ContainerFontAwesome5 = styled(FontAwesome5)`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
`
