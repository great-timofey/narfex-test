import 'react-native-gesture-handler'
import React from 'react'
import { Image, StatusBar, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Markets, Logo, OrderBook } from '@screens'
import { TabBar } from '@components/TabBar'
import IconBack from '@assets/images/icon-back.png'

const IconStack = createStackNavigator()
const MarketStack = createStackNavigator()
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

function MarketsStack() {
  return (
    <MarketStack.Navigator>
      <MarketStack.Screen
        name="Markets"
        component={Markets}
        options={{
          title: 'Markets',
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
        }}
      />
      <MarketStack.Screen
        name="OrderBook"
        component={OrderBook}
        options={({ route }) => ({
          title: route.params.marketName,
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
          headerLeft: ({ ...props }) => (
            <TouchableOpacity
              {...props}
              style={{
                width: 100,
                height: 50,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 20,
              }}
            >
              <Image source={IconBack} style={{ width: 9, height: 18 }} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
    </MarketStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          name="Markets"
          component={MarketsStack}
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
