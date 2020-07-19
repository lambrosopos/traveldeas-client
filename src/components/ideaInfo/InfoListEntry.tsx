import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function InfoListEntry(props: any) {
  const {item} = props
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} >{item.title} </Text>
      <Text style={styles.textDescription} >{item.description} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textTitle: {
    flex: 0.3,
    justifyContent: 'flex-start',
    marginLeft: 15,
    color: '#fff',
  },
  textDescription: {
    flex: 0.7,
    marginRight: 15,
    textAlign: 'right',
    color: '#fff',
    backgroundColor: 'orange'
  }
})

export default InfoListEntry
