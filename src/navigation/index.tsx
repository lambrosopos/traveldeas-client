import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {SplashScreen} from '../screens/MainScreens'
import DrawerNavigator from './DrawerNavigator';

export default function RootNavigation() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) return <SplashScreen />

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
