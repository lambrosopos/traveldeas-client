import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {screenTypes} from '../../types'

export default class ProfileScreen extends React.Component<screenTypes.ProfileProps>{
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
