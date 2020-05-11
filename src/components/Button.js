import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPressHandler, textColor, textSize, style, ...props }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPressHandler} {...props}>
      <Text style={[{ fontSize: textSize || 20 }, { color: textColor || '#7030a0' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99CB38',
  },
});

export default CustomButton;
