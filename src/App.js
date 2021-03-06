import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Navigator from './navigation'

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </NavigationContainer>
  )
}

export default App
