import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

import InputContainer from './InputContainer';

const PickerBox = ({ title, onChangeHandler, value }) => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <InputContainer>
      {showTitle && <Text style={styles.title}>{title}</Text>}
      <Picker
        style={styles.textInput}
        selectedValue={value}
        onValueChange={(val) => {
          onChangeHandler(val);
          setShowTitle(true);
        }}
      >
        <Picker.Item label='Select Finance Option' value={0} />
        <Picker.Item label='1 Year' value={12} />
        <Picker.Item label='2 Year' value={24} />
        <Picker.Item label='3 Year' value={36} />
      </Picker>
    </InputContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#7030a0',
  },
  textInput: {
    color: '#7030a0',
    fontSize: 20,
    fontWeight: 'bold',
    height: 40,
  },
});

export default PickerBox;
