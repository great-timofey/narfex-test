import React, { memo, useCallback } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import MarketsTabIcon from '@assets/images/markets-tab-icon.png'
import MarketsTabIconFocused from '@assets/images/markets-tab-icon-focused.png'
import LogoTabIcon from '@assets/images/logo-tab-icon.png'
import LogoTabIconFocused from '@assets/images/logo-tab-icon-focused.png'

import styles from './styles'

export const TabBar = memo(function({ state, navigation }) {
  const getRouteIcon = useCallback((route, focused) => {
    let iconSource

    if (route.name === 'Markets') {
      iconSource = focused ? MarketsTabIconFocused : MarketsTabIcon
    } else if (route.name === 'Logo') {
      iconSource = focused ? LogoTabIconFocused : LogoTabIcon
    }

    return <Image resizeMode="contain" source={iconSource} style={styles.icon} />
  }, [])

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const focused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tab,
              index === 0 ? { borderTopLeftRadius: 20 } : { borderTopRightRadius: 20 },
            ]}
          >
            {focused && <View style={styles.focus} />}
            {getRouteIcon(route, focused)}
          </TouchableOpacity>
        )
      })}
    </View>
  )
})
