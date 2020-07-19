import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {connect} from 'react-redux'

import {IdeaActions as IA} from '../../actions'

function GridEntry(props: any) {
  const {item} = props
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.dispatch(IA.setCurrentIdea(item))
        navigation.navigate('Idea')
      }}>
      <View style={styles.imageContainer}>
        <MaterialCommunityIcons name={item.icon} size={100} color="black" />
      </View>
      <View style={styles.title}>
        <Text>{item.idea}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: 140,
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 0.8,
    backgroundColor: '#fff'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 0.2,
  },
})

export default connect()(GridEntry)
