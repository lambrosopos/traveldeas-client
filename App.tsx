import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import RootReducer from './src/reducers'
import RootNavigation from './src/navigation'

const store = createStore(RootReducer)

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#000" translucent={false} />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaProvider>
  )
}
