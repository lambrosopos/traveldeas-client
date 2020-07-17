import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import * as MainStack from '../screens/MainStack'

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={MainStack.HomeScreen} />
          <Stack.Screen name="IdeaScreen" component={MainStack.IdeaScreen} />
        </Stack.Navigator>
    )
}

const Stack = createStackNavigator()
