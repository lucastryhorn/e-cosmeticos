import React, { useState } from 'react'
import { View, ViewRow } from '../../components/View'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { ContainerLogin } from './styles'
import { Switch } from 'react-native'
import { Button } from '../../components/Button'

function Login(props) {
  const [state, setState] = useState({})
  const { navigate } = props.navigation

  function changeShowPassword() {
    setState({ ...state, showPassword: !state.showPassword })
  }

  function handlerChange(name, value) {
    setState({ ...state, [name]: value })
  }

  return (
    <View>
      <ContainerLogin>
        <TextInput
          text="E-Mail"
          error={state.error?.email}
          onChangeText={text => handlerChange('email', text)}
          value={state.email}
        />
        <TextInput
          icon={!state.showPassword ? 'eye' : 'eye-slash'}
          text="Senha"
          error={state.error?.password}
          pressedIcon={changeShowPassword}
          onChangeText={text => handlerChange('password', text)}
          value={state.password}
        />
        <ViewRow>
          <ViewRow>
            <Switch />
            <Text>Lembrar-me</Text>
          </ViewRow>
          <Text>Esqueceu a senha?</Text>
        </ViewRow>
        <Button backgroundColor="#472723">
          <Text color="#FFF">Entrar</Text>
        </Button>
        <Button onPress={() => navigate('Register')} backgroundColor="#EEE1D8">
          <Text>Registrar-se</Text>
        </Button>
      </ContainerLogin>
    </View>
  )
}

export default Login
