import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { Markets } from '@screens/Markets'
import { OrderBook } from '@screens/OrderBook'
import IconBack from '@assets/images/icon-back.png'
import * as SCREEN_NAMES from '@global/screenNames'

import styles, { commonHeaderStyles, commonHeaderTitleStyles } from './styles'

const MarketStack = createStackNavigator()

export function MarketsStack() {
  return (
    <MarketStack.Navigator>
      <MarketStack.Screen
        name={SCREEN_NAMES.MARKETS}
        component={Markets}
        options={{
          title: 'Markets',
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
        }}
      />
      <MarketStack.Screen
        name={SCREEN_NAMES.ORDER_BOOK}
        component={OrderBook}
        options={({ route }) => ({
          title: route.params.marketName,
          headerTitleStyle: commonHeaderTitleStyles,
          headerStyle: commonHeaderStyles,
          headerLeft: ({ ...props }) => (
            <TouchableOpacity {...props} style={styles.headerBackButton}>
              <Image source={IconBack} style={styles.headerBackIcon} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
    </MarketStack.Navigator>
  )
}
