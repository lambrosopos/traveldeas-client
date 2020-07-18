import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default function SigninScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button title="Log in" onPress={() => null}/>
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
