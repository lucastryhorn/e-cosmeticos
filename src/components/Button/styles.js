import styled from 'styled-components'

export const ContainerButton = styled.TouchableOpacity`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'}
  border-radius: 20px
  padding: 10px
  align-items: center
  margin-top: 15px
`
