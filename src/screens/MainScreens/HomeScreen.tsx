import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'

import {screenTypes} from '../../types'
import {IdeasOptionsBar, Ideas} from '../../components'

export default class HomeScreen extends React.Component<screenTypes.HomeProps> {
  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={styles.headerStyle}
          leftComponent={<IdeasOptionsBar.GridOrList />}
          rightComponent={<IdeasOptionsBar.FilterMenu />}
        />
        <Ideas.IdeasList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle: {
    height: 40,
    paddingTop: 0,
    paddingRight: 15
  }
})
