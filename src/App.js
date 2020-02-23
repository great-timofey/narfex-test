import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Bids, Logo, OrderBook } from '@screens'
import { TabBar } from '@components/TabBar'

const IconStack = createStackNavigator()
const BidStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const commonHeaderTitleStyles = {
  fontFamily: 'Montserrat-Medium',
  fontWeight: '500',
  fontSize: 16,
  lineHeight: 24,
}

const commonHeaderStyles = {
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
}

function LogoStack() {
  return (
    <IconStack.Navigator>
      <IconStack.Screen
        name="Logo"
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

function BidsStack() {
  return (
    <BidStack.Navigator>
      <BidStack.Screen
        name="Bids"
        component={Bids}
        options={{
          title: 'Markets',
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
        }}
      />
      <BidStack.Screen
        name="OrderBook"
        component={OrderBook}
        options={{
          title: 'order book',
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
        }}
      />
    </BidStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          name="Bids"
          component={BidsStack}
          options={({ route }) => {
            const routeName = route.state && route.state.routes[route.state.index].name
            return {
              tabBarVisible: routeName !== 'OrderBook',
            }
          }}
        />
        <Tab.Screen name="Logo" component={LogoStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
