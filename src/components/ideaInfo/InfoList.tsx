import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import InfoListEntry from './InfoListEntry'

function InfoList(props: any) {
  const {currentIdea} = props
  return (
    <View style={styles.container}>
      <FlatList
        data={currentIdea.info}
        renderItem={({item}: any) => (
          <InfoListEntry key={item.key} item={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'blue'
  }
})

const mapStateToProps = (state: any) => ({
  currentIdea: state.IdeaReducer.currentIdea
})

export default connect(mapStateToProps)(InfoList)

