import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
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

