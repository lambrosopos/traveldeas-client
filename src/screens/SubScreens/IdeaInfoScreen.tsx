import React from 'react'
import {View, StyleSheet} from 'react-native'
//import {connect} from 'react-redux'
import {IdeaInfo} from '../../components'

export default function IdeaInfoScreen() {
  return (
    <View style={styles.container}>
      <IdeaInfo.Head />
      <IdeaInfo.Body />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
