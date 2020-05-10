import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPressHandler, style, ...props }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPressHandler} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99CB38',
  },
  text: {
    color: '#7030a0',
    fontSize: 20,
  },
});

export default CustomButton;
