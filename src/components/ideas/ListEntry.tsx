import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ListEntry(props: any) {
  const {item} = props
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Idea')
      }}>
      <View style={styles.imageContainer}>
        <MaterialCommunityIcons name={item.icon} size={55} color="black" />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imageContainer: {
    backgroundColor: '#fff',
  },
  titleContainer: {
    flex: 0.9,
    backgroundColor: '#000',
    alignSelf: 'stretch'
  },
  text: {
    color: '#fff',
    marginLeft: 5,
    marginTop: 5
  }
})
