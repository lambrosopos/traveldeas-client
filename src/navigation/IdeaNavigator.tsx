import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SimpleLineIcons} from '@expo/vector-icons';
import {SubScreens} from '../screens'

export default function IdeaNavigator() {
  return (
    <Tab.Navigator initialRouteName='IdeaInfo'
      screenOptions={(props: any) => ({
        tabBarIcon: ({focused}) => {
          const icons = {IdeaInfo: 'info', Calendar: 'calendar', Album: 'picture'}
          return (<SimpleLineIcons name={icons[props.route.name]} size={24} color={focused ? 'pink' : 'black'} />)
        }
      })
      } >
      <Tab.Screen name='IdeaInfo' component={SubScreens.IdeaInfoScreen} />
      <Tab.Screen name='Calendar' component={SubScreens.CalendarScreen} />
      <Tab.Screen name='Album' component={SubScreens.AlbumScreen} />
    </ Tab.Navigator >
  )
}

const Tab = createBottomTabNavigator()
