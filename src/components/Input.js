import React, { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

import InputContainer from './InputContainer';

const Input = ({ title, placeholder, onChangeHandler, defaultValue }) => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <InputContainer>
      {showTitle && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onFocus={() => setShowTitle(true)}
        onChangeText={(text) => onChangeHandler(text)}
        keyboardType={'numeric'}
      />
    </InputContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8e6ba0',
    height: 60,
    margin: 5,
    padding: 3,
  },
  title: {
    fontSize: 11,
    color: '#7030a0',
  },
  textInput: {
    color: '#7030a0',
    fontWeight: 'bold',
    height: 40,
  },
});

export default Input;
