import React, { useState } from 'react';
import { View } from 'react-native';

import Input from '../components/Input';
import DatePicker from '../components/DatePicker';
import PickerBox from '../components/PickerBox';
import Button from '../components/Button';

const Home = (props) => {
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [deposit, setDeposit] = useState('');
  const [deliveryDate, setDeliveryDate] = useState();
  const [financeOption, setFinanceOption] = useState();

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
      <DatePicker setDate={setDeliveryDate} date={deliveryDate} title={'Delivery Date'} />
      <PickerBox
        onChangeHandler={setFinanceOption}
        value={financeOption}
        title={'Finance Options'}
      />
      <Button
        onPressHandler={() => {
          console.log(vehiclePrice, deposit, deliveryDate, financeOption);
        }}
        title='Calculate Payments'
      />
    </View>
  );
};

export default Home;
