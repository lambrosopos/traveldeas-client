import React from 'react'
import {View, StyleSheet} from 'react-native'

import InfoList from './InfoList'

function Body() {
  return (
    <View style={styles.container}>
      <InfoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  }
})

export default Body
