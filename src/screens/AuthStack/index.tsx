import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SigninScreen from './SigninScreen'
import SignupScreen from './SignupScreen'
import SignoutScreen from './SignoutScreen'

const Stack = createStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="SignoutScreen" component={SignoutScreen} />
    </Stack.Navigator>
  )
}

