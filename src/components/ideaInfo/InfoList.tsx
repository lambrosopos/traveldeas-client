import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'

import InfoListEntry from './InfoListEntry'

function InfoList(props: any) {
  const {data} = props
  console.log(data)
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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

export default InfoList

