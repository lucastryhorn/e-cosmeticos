import React from 'react'
import { View } from '../../components/View'
import { ImageBackground, StatusBar } from 'react-native'
import { homeReseller } from '../../assets/img'
import { Card, ScrollCard } from './styles'
import { Text } from '../../components/Text'
import { IconFA5 } from '../../assets/icons'

function HomeReseller() {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={{ width: '100%', height: '60%' }}
        source={homeReseller}
      />
      <ScrollCard contentContainerStyle={{ alignItems: 'center' }}>
        <Card>
          <Text>AQUI</Text>
          <IconFA5 name="eye" />
        </Card>
      </ScrollCard>
    </View>
  )
}

export default HomeReseller
