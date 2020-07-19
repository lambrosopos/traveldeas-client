import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Cover() {
  return (
    <View style={styles.container}>
      <Text>Cover Photo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: "100%",
    height: "80%",
    alignSelf: 'stretch',
    backgroundColor: 'green'
  }
})

export default Cover

