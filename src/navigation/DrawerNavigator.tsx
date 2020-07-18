import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import {connect} from 'react-redux'

import {routeTypes} from '../types'
import {ProfileScreen, ConfigurationScreen} from '../screens/MainScreens'
import HomeNavigator from './HomeNavigator'

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Home'
      drawerStyle={{
        width: "80%"
      }}
    >
      <Drawer.Screen name="Home" children={HomeNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
    </Drawer.Navigator>
  )
}

const Drawer = createDrawerNavigator<routeTypes.DrawerNavigatorParamList>()

const mapStateToProps = (state: any) => ({
  showGrid: state.IdeaReducer.showGrid,
  currentIdea: state.IdeaReducer.currentIdea,
  ideaList: state.IdeaReducer.ideaList
})

export default connect(mapStateToProps)(DrawerNavigator)
