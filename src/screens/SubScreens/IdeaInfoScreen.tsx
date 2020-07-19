import React from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {IdeaInfo} from '../../components'

function IdeaInfoScreen() {
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

const mapStateToProps = (state: any) => ({
  currentIdea: state.IdeaReducer.currentIdea
})

export default connect(mapStateToProps)(IdeaInfoScreen)
