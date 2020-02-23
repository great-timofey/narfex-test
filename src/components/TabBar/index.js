import React, { memo, useCallback } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import BidsTabIcon from '@assets/images/bids-tab-icon.png'
import BidsTabIconFocused from '@assets/images/bids-tab-icon-focused.png'
import LogoTabIcon from '@assets/images/logo-tab-icon.png'
import LogoTabIconFocused from '@assets/images/logo-tab-icon-focused.png'
import { colors } from '@global/styles'

export const TabBar = memo(function({ state, navigation }) {
  const getRouteIcon = useCallback((route, focused) => {
    let iconSource

    if (route.name === 'Bids') {
      iconSource = focused ? BidsTabIconFocused : BidsTabIcon
    } else if (route.name === 'Logo') {
      iconSource = focused ? LogoTabIconFocused : LogoTabIcon
    }

    return <Image resizeMode="contain" source={iconSource} style={{ width: 24, height: 24 }} />
  }, [])

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FAF7F5',
      }}
    >
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
              {
                shadowColor: 'rgba(0, 0, 0, 0.08)',
                shadowOffset: { width: 0, height: 6 },
                shadowBlur: 24,
                flex: 1,
                position: 'relative',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.cardBase,
              },
              index === 0 ? { borderTopLeftRadius: 20 } : { borderTopRightRadius: 20 },
            ]}
          >
            {focused && (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  width: 32,
                  height: 2,
                  top: 0,
                  alignSelf: 'center',
                }}
              />
            )}
            {getRouteIcon(route, focused)}
          </TouchableOpacity>
        )
      })}
    </View>
  )
})
