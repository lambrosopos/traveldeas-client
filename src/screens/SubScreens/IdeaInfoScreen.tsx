import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

function IdeaInfoScreen(props: any) {
  const {currentIdea} = props
  return (
    <View style={styles.container}>
      <View>
        <Text>Cover Photo</Text>
        <Text>{currentIdea.title}</Text>
      </View>
      <View>
        <Text>기간 :</Text>
        <Text>이동수단 :</Text>
        <Text>숙박 :</Text>
        <Text>위치 :</Text>
        <Text>예산 :</Text>
      </View>
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
