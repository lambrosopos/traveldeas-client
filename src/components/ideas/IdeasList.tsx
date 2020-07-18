import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {componentsTypes} from '../../types'
import ListEntry from './ListEntry'
import GridEntry from './GridEntry'

function IdeasList(props: componentsTypes.IdeasList) {
  return (
    <View style={styles.container}>
      <FlatList
        key={props.showGrid ? 2 : 1}
        numColumns={props.showGrid ? 2 : 1}
        data={props.ideaList}
        renderItem={({item}) => (
          props.showGrid ?
            <GridEntry key={item.key} item={item} />
            :
            <ListEntry key={item.key} item={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

const mapStateToProps = (state: any) => ({
  ideaList: state.IdeaReducer.ideaList,
  showGrid: state.IdeaReducer.showGrid
})

export default connect(mapStateToProps)(IdeasList)
