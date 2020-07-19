import React from 'react'
import {View, StyleSheet} from 'react-native'

import Cover from './Cover'
import Profile from './Profile'

export default function Head() {
  return (
    <View style={styles.container}>
      <Cover />
      <Profile />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    alignSelf: 'stretch',
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
})

