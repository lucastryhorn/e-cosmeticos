import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeReseller from '../pages/HomeReseller'

function Routes() {
  return (
    <HomeReseller />
    // <NavigationContainer>
    //   <AuthStack />
    // </NavigationContainer>
  )
}

export default Routes
