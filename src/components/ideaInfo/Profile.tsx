import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
})

export default Profile

