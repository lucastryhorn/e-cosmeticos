import React from 'react'
import { ContainerHeader } from './styles'
import { IconFA5 } from '../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

export default function Header() {
  const navigation = useNavigation()
  return (
    <ContainerHeader>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconFA5 name="arrow-left" />
      </TouchableOpacity>
    </ContainerHeader>
  )
}
