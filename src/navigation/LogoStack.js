import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Logo } from '@screens/Logo'
import * as SCREEN_NAMES from '@global/screenNames'

import { commonHeaderTitleStyles, commonHeaderStyles } from './styles'

const IconStack = createStackNavigator()

export function LogoStack() {
  return (
    <IconStack.Navigator>
      <IconStack.Screen
        name={SCREEN_NAMES.LOGO}
        component={Logo}
        options={{
          title: 'Menu',
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
        }}
      />
    </IconStack.Navigator>
  )
}
