import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => props.navigation.navigate('Payment')} title='Payment Schedule' />
    </View>
  );
};

export default Home;
