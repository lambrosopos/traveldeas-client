import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function InfoListEntry(props: any) {
  const {item} = props
  return (
    <View style={styles.container}>
      <Text style={styles.text} >{item.title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#000'
  },
  text: {
    color: '#fff',
  }
})

export default InfoListEntry
