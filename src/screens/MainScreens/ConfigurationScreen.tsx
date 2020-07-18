import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {screenTypes} from '../../types'

export default class ConfigurationScreen extends React.Component<screenTypes.ConfigurationProps> {
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
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
