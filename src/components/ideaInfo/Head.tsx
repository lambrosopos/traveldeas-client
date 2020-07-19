import React from 'react'
import {View, StyleSheet} from 'react-native'

import Cover from './Cover'
import Profile from './Profile'

function Head() {
  return (
    <View style={styles.container}>
      <Cover />
      <Profile />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    alignSelf: 'stretch',
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
})

export default Head
