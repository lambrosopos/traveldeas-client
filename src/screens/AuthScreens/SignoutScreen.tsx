import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default function SignoutScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign Out</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})
