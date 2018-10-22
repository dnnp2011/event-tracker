// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './Components/EventList';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <EventList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5.5%',
    // marginTop: 22,
    // flex: 1,
    backgroundColor: '#8a8a8a',
/*    alignItems: 'center',
    justifyContent: 'center',*/
  },
});
