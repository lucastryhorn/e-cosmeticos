/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import 'react-native-gesture-handler'
import Routes from './routes'
import { StatusBar } from 'react-native'

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fbf7f2" />
      <Routes />
    </>
  )
}

export default App
