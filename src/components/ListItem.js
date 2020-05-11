import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

import Card from './InputContainer';

const ListItem = ({ amount, date, note, backgroundColor }) => {
  return (
    <Card
      style={{
        height: 42,
        borderWidth: 0,
        borderRadius: 0,
        marginTop: 1,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: backgroundColor,
      }}
    >
      <View>
        <Text style={styles.number}>£{amount.toFixed(2)}</Text>
      </View>
      <View style={styles.tile}>
        <Text style={styles.date}>{moment(date).format('DD-MM-YYYY')}</Text>
        <Text>{note}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  number: {
    fontSize: 26,
  },
  tile: {
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ListItem;
