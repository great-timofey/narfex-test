import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from '@components/TabBar'
import * as SCREEN_NAMES from '@global/screenNames'

import { MarketsStack } from './MarketStack'
import { LogoStack } from './LogoStack'

const Tab = createBottomTabNavigator()

export default function Navigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} initialRouteName={SCREEN_NAMES.LOGO}>
      <Tab.Screen
        name={SCREEN_NAMES.MARKETS}
        component={MarketsStack}
        options={({ route }) => {
          const routeName = route.state && route.state.routes[route.state.index].name
          return {
            tabBarVisible: routeName !== SCREEN_NAMES.ORDER_BOOK,
          }
        }}
      />
      <Tab.Screen name={SCREEN_NAMES.LOGO} component={LogoStack} />
    </Tab.Navigator>
  )
}
