import React from 'react';
import { View, StyleSheet } from 'react-native';

const InputContainer = (props) => {
  return <View style={{ ...styles.container, ...props.style }}>{props.children}</View>;
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
});

export default InputContainer;
