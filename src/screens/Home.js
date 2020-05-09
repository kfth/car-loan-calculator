import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import Input from '../components/Input';
import DatePicker from '../components/DatePicker';

const Home = (props) => {
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [deposit, setDeposit] = useState('');
  const [deliveryDate, setDeliveryDate] = useState();

  return (
    <View>
      <Input
        title='Vehicle Price'
        placeholder='Enter Vehicle Price'
        onChangeHandler={setVehiclePrice}
        defaultValue={vehiclePrice}
      />
      <Input
        title='Deposit'
        placeholder='Enter deposit amount'
        onChangeHandler={setDeposit}
        defaultValue={deposit}
      />
      <DatePicker setDate={setDeliveryDate} date={deliveryDate} />
      <Button
        onPress={() => {
          console.log(vehiclePrice, deposit);
        }}
        title='Payment Schedule'
      />
    </View>
  );
};

export default Home;
