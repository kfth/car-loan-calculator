import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Card from './InputContainer';

const ImageListItem = ({ title, variant, img, monthlyPayment }) => {
  return (
    <Card
      style={{
        height: undefined,
        position: 'relative',
        padding: 0,
        borderRadius: 10,
      }}
    >
      <View style={styles.header}>
        <Text style={[styles.bigText, styles.bold, styles.primaryColor]}>{title}</Text>
        <Text style={[styles.smallText, styles.bold, styles.primaryColor]}>{variant}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text style={[styles.xLText, styles.bold, styles.secondaryColor]}>£{monthlyPayment}</Text>
        <Text style={[styles.xSmallText, styles.bold, styles.secondaryColor]}>per month</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '17%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: 'rgba(153, 203, 56, 0.7)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  xLText: {
    fontSize: 40,
  },
  bigText: {
    fontSize: 30,
  },
  smallText: {
    fontSize: 16,
  },
  xSmallText: {
    fontSize: 13,
  },
  bold: {
    fontWeight: 'bold',
  },
  primaryColor: {
    color: '#7030a0',
  },
  secondaryColor: {
    color: '#99cb38',
  },
  footer: {
    width: '100%',
    height: '18%',
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(112, 48, 160, 0.7)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default ImageListItem;
