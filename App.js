import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/screens/Home';
import Payment from './src/screens/Payment';
import Cars from './src/screens/Cars';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Calculate Loan' }} />
        <Stack.Screen name='Payment' component={Payment} options={{ title: 'Payment Schedule' }} />
        <Stack.Screen name='Cars' component={Cars} options={{ title: 'Available Cars' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
