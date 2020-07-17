import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class IdeaScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Idea</Text>
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
