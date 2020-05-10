import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import Input from '../components/Input';
import DatePicker from '../components/DatePicker';
import PickerBox from '../components/PickerBox';
import Button from '../components/Button';

import getQuote from '../../utils/getQuote';

const Home = (props) => {
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [deposit, setDeposit] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [financeOption, setFinanceOption] = useState(0);

  const calculatePayments = () => {
    const vehiclePriceIsValid = !!vehiclePrice && !isNaN(vehiclePrice);
    const depositIsValid = !!deposit && !isNaN(deposit);
    const depositIsSufficient = deposit >= vehiclePrice * 0.15;
    const deliveryDateIsValid = !!deliveryDate;
    const financeOptionIsValid = financeOption > 0;

    if (
      vehiclePriceIsValid &&
      depositIsValid &&
      depositIsSufficient &&
      deliveryDateIsValid &&
      financeOptionIsValid
    ) {
      const details = getQuote(vehiclePrice, deposit, deliveryDate, financeOption);
      props.navigation.navigate('Payment', JSON.stringify(details));
    } else {
      let alertMessage = '';
      alertMessage = vehiclePriceIsValid
        ? alertMessage
        : alertMessage + 'Vehicle price must be numeric\n';
      alertMessage = depositIsValid ? alertMessage : alertMessage + 'Deposit must be numeric.\n';
      alertMessage = depositIsSufficient
        ? alertMessage
        : alertMessage + 'Deposit must be a minimum %15 of vehicle price\n';
      alertMessage = deliveryDateIsValid
        ? alertMessage
        : alertMessage + 'Delivery date is required\n';
      alertMessage = financeOptionIsValid
        ? alertMessage
        : alertMessage + 'Finance options is required\n';

      Alert.alert(
        'Invalid Input(s)',
        alertMessage,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };

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
      <Button onPressHandler={calculatePayments} title='Calculate Payments' />
    </View>
  );
};

export default Home;
