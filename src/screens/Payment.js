import React from 'react';
import { View, Text } from 'react-native';

const Payment = (props) => {
  return (
    <View>
      <Text>Payment</Text>
      <Text>{props.route.params}</Text>
    </View>
  );
};

export default Payment;
