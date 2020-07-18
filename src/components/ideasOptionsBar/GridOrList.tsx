import React from 'react'
import {Entypo} from '@expo/vector-icons'
import {View} from 'react-native'
import {connect} from 'react-redux'

import {IdeaActions as IA} from '../../actions'

function GridOrList(props: any) {

  return (
    <View>
      <Entypo
        name={props.showGrid ? 'list' : 'grid'}
        size={30}
        color='#fff'
        onPress={() => {
          props.dispatch(IA.toggleGridView())
        }} />
    </View>
  )
}

const mapStateToProps = (state: any) => ({
  showGrid: state.IdeaReducer.showGrid
})

export default connect(mapStateToProps)(GridOrList)
