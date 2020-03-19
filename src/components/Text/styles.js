import styled from 'styled-components'

const font = {
  PFRegular: 'PlayfairDisplay-Regular',
  PFBold: 'PlayfairDisplay-Bold',
  Roboto: 'Roboto-Regular',
  RobotoBold: 'Roboto-Bold',
}

export const ContainerText = styled.Text`
  font-family: ${props =>
    props.fontFamily ? font[props.fontFamily] : 'Roboto-Regular'};
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}
  color: ${props => (props.color ? props.color : '#000')}
`
