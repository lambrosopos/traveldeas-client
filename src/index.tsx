import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {View, Text, StyleSheet} from 'react-native'

import * as MainScreens from './screens/MainScreens'

export default class MainApp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="HomeScreen" component={MainScreens.HomeScreen} />
          <Drawer.Screen name="ProfileScreen" component={MainScreens.ProfileScreen} />
          <Drawer.Screen name="ConfigurationScreen" component={MainScreens.ConfigurationScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

