import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import RootNavigation from './src/navigation'
export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})

