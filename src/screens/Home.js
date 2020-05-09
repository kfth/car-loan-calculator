import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import Input from '../components/Input';

const Home = (props) => {
  const [vehiclePrice, setVehiclePrice] = useState('');

  return (
    <View>
      <Input
        title='Vehicle Price'
        placeholder='Enter Vehicle Price'
        onChangeHandler={setVehiclePrice}
        defaultValue={vehiclePrice}
      />
      <Button
        onPress={() => {
          console.log(vehiclePrice);
        }}
        title='Payment Schedule'
      />
    </View>
  );
};

export default Home;
