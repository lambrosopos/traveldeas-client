import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ConfigurationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ConfigurationScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})
