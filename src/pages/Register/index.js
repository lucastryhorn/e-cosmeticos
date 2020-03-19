import React from 'react'
import { View } from '../../components/View'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import Header from '../../components/Header'
import { ContainerRegister, ViewTitle, ViewTerms } from './styles'

function Register() {
  return (
    <View>
      <Header />
      <ContainerRegister>
        <ViewTitle>
          <Text fontSize={24} fontFamily="PFRegular">
            Registre-se
          </Text>
        </ViewTitle>
        <TextInput text="Primeiro Nome" />
        <TextInput text="Sobremome" />
        <TextInput text="E-Mail" />
        <TextInput text="Senha" />
        <Button backgroundColor="#472723">
          <Text color="#FFF">Criar Conta</Text>
        </Button>
      </ContainerRegister>
      <ViewTerms>
        <Text>Ao se registrar-se, você concorda com os termos</Text>
      </ViewTerms>
    </View>
  )
}

export default Register
