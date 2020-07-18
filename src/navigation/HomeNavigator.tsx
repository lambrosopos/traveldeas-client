import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {TouchableOpacity} from 'react-native'
import {Entypo} from '@expo/vector-icons';

import {routeTypes} from '../types'
import {HomeScreen} from '../screens/MainScreens'
import IdeaNavigator from './IdeaNavigator'

export default function HomeNavigator(props: any) {
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{

          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => props.navigation.openDrawer()}
            >
              <Entypo name="menu" size={24} color="#000" />
            </TouchableOpacity >)
        }} />
      <Stack.Screen name="Idea" children={IdeaNavigator} />
    </Stack.Navigator>
  )
}

const Stack = createStackNavigator<routeTypes.HomeNavigatorParamList>()
