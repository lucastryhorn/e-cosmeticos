import styled from 'styled-components'

export const ViewMargin = styled.View`
  margin-bottom: 15px;
  margin-top: 5px;
`

export const ViewTextInput = styled.View`
  border-bottom-width: 2px;
  height: 40px;
  border-color: ${props => (props.error ? '#d1aeac' : '#c7c3c4')};
`

export const TextInputContainer = styled.TextInput`
  flex: 1;
`
