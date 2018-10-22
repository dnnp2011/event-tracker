// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountdownParts } from '../api';

type Props = {
  style?: string,
  event?: Object,
}


const EventCard = ({ event }: Object) => {

  const {
    days,
    hours,
    minutes,
    seconds,
  }:Object = getCountdownParts(event.date);

  return (
    <View style={styles.card}>

      <View style={styles.cardHeader}>
        <Text style={ styles.date }>{ formatDate(event.date) }</Text>
        <Text style={ styles.title }>{ event.title }</Text>
      </View>

      <View style={styles.counterContainer}>

        <View style={styles.counter}>
          <Text style={styles.counterText}>{ days }</Text>
          <Text style={styles.counterLabel}>DAYS</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{ hours }</Text>
          <Text style={styles.counterLabel}>HOURS</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{ minutes }</Text>
          <Text style={styles.counterLabel}>MINUTES</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{ seconds }</Text>
          <Text style={styles.counterLabel}>SECONDS</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card : {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  cardHeader : {
    flex: 1,
    flexDirection: 'row',
  },
  date : {
    fontWeight: '200',
    fontSize: 15,
    color: '#bdbdbd',
    width: '30%',
    textAlign: 'right',
  },
  title : {
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 7,
    textAlign: 'left',
  },
  counterContainer : {

  },
  counter : {

  },
  counterText : {

  },
  counterLabel :  {

  },
});

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  }),
};

export default EventCard;