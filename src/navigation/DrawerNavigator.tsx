import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import * as MainDrawer from '../screens/Drawer'
import HomeNavigator from './HomeNavigator'

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="HomeScreen" children={HomeNavigator} />
          <Drawer.Screen name="ProfileScreen" component={MainDrawer.ProfileScreen} />
          <Drawer.Screen name="ConfigurationScreen" component={MainDrawer.ConfigurationScreen} />
        </Drawer.Navigator>
    )
}

const Drawer = createDrawerNavigator()
