// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import EventCard from './EventCard';

type Props = {
  data?: Date,
  renderItem?: Object,
  event?: Object,
  keyExtractor?: string,
};
type State = {
  events?: Array<Date | string>,
};

export default class EventList extends Component<Props, State>
{
  state = {
    events: [],
  };

  componentWillMount() {
    const events = require('../db').events.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events: events });
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.EventList}
          data={ this.state.events }
          renderItem={ ({ item }) => <EventCard event={ item } /> }
          keyExtractor={ item => item.id }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  EventList : {
    // position: 'absolute',
    flex: 1,
    // justifyContent: 'center',
    // direction: 'column',
    // width: '100%',
    // flex: 1,
    // justifyContent: 'center',
    // zIndex: -1,
    // width: '100vw',
    // height: '100vh',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ececec',
  },
});