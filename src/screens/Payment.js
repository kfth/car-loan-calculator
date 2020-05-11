import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Card from '../components/InputContainer';
import Button from '../components/Button';
import ListItem from '../components/ListItem';

const Payment = (props) => {
  const { deposit, totalLoan, months, payments } = JSON.parse(props.route.params);
  return (
    <View style={styles.container}>
      <Card style={styles.header}>
        <View style={styles.tileContainer}>
          <View style={styles.tile}>
            <Text>Deposit </Text>
            <Text style={styles.tileNumber}>£{deposit}</Text>
          </View>
          <View style={styles.tile}>
            <Text>Total Loan (inc.all fees)</Text>
            <Text style={styles.tileNumber}>£{totalLoan}</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Text>{months} months</Text>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={payments}
          renderItem={({ item, index }) => {
            const { amount, key, note } = item;
            return (
              <ListItem
                amount={amount}
                date={key}
                note={note}
                backgroundColor={index % 2 ? '#cbbbc6' : '#cacfbf'}
              ></ListItem>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <Button
          title='< Back'
          style={styles.backButton}
          textColor='#876d83'
          onPress={() => props.navigation.goBack()}
        />
        <Button
          title='Show Cars >'
          style={styles.carsButton}
          onPress={() =>
            props.navigation.navigate(
              'Cars',
              JSON.stringify({ monthlyPayment: payments[1].amount }),
            )
          }
        />
      </View>
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
  tileContainer: { flexDirection: 'row' },
  listContainer: {
    flex: 0.88,
    paddingBottom: 60,
    marginBottom: -60,
  },
  tile: { flexGrow: 1, alignItems: 'center' },
  tileNumber: { color: '#7030a0', fontWeight: 'bold', fontSize: 24 },
  footer: {
    flex: 0.12,
    flexDirection: 'row',
    bottom: 0,
    padding: 0,
  },
  backButton: {
    backgroundColor: '#7030a0',
    borderRadius: 0,
    flexGrow: 1,
    margin: 0,
  },
  carsButton: {
    borderRadius: 0,
    flexGrow: 3,
    margin: 0,
  },
});

export default Payment;
