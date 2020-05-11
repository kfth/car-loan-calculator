import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Error = ({ imgSource, message, advice }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSource} />
      <View style={styles.messageContainer}>
        <Text style={styles.text}>Opps!</Text>
        <Text style={styles.text}>{message}</Text>
        <Text style={styles.text}>{advice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: '#7030a0',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    height: 140,
    width: 142,
  },
});

export default Error;
