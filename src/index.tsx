import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { View, Text, StyleSheet } from 'react-native'

import * as MainDrawer from './screens/Drawer'
import * as MainStack from './screens/MainStack'

export default class MainApp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="HomeScreen" component={MainStack.HomeScreen} />
          <Drawer.Screen name="ProfileScreen" component={MainDrawer.ProfileScreen} />
          <Drawer.Screen name="ConfigurationScreen" component={MainDrawer.ConfigurationScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})

