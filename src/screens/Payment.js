import React from 'react';
import { View, StyleSheet } from 'react-native';

import Card from '../components/InputContainer';

const Payment = (props) => {
  const { deposit, loan, months, payments } = JSON.parse(props.route.params);
  return (
    <View style={styles.container}>
      <Card style={styles.header}></Card>
      <View style={styles.listContainer}></View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    height: 80,
    backgroundColor: '#99CB38',
    borderWidth: 0,
  },
  listContainer: {
    flex: 0.88,
    paddingBottom: 60,
    marginBottom: -60,
  },
  footer: {
    flex: 0.12,
    flexDirection: 'row',
    backgroundColor: '#99CB38',
    bottom: 0,
    padding: 0,
  },
  backButton: {
    flexGrow: 1,
    margin: 0,
  },
  carsButton: {
    flexGrow: 3,
    margin: 0,
  },
});

export default Payment;
