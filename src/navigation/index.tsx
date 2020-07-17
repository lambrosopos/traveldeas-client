import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { View, Text, StyleSheet } from 'react-native'

import { SplashScreen, AuthStack } from '../screens'
import DrawerNavigator from './DrawerNavigator';

export const [isLoading, setIsLoading] = React.useState(true)
export const [userToken, setUserToken] = React.useState('asdf')

export default function RootNavigation() {
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <SplashScreen />
  } else {
    return (
      <NavigationContainer>
        { userToken ? <DrawerNavigator /> : <AuthStack /> }
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})
