import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import InfoList from './InfoList'

function Body() {
  const list = [
    {title: '기간', key: '1'},
    {title: '이동수단', key: '2'},
    {title: '숙박', key: '3'},
    {title: '위치', key: '4'},
    {title: '예산', key: '5'},
  ]

  return (
    <View style={styles.container}>
      <InfoList data={list} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  }
})

export default Body
