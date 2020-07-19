import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux'

function Profile(props: any) {
  const {currentIdea} = props
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MaterialCommunityIcons name={currentIdea.icon} size={90} color="black" />
      </View>
      <View style={styles.title}>
        <Text>{currentIdea.idea}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 0.8,
    backgroundColor: '#fff'
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: 110,
    width: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 0.2,
    backgroundColor: 'red'
  },
})

const mapStateToProps = (state: any) => ({
  currentIdea: state.IdeaReducer.currentIdea
})

export default connect(mapStateToProps)(Profile)
