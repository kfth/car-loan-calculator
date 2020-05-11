import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Button from '../components/Button';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ImageListItem from '../components/ImageListItem';

const Cars = (props) => {
  const { monthlyPayment } = JSON.parse(props.route.params);
  const URI = `https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&max_price=${monthlyPayment}&unreserved_only=true&sort_order=monthly_payment_down`;

  const [cars, setCars] = useState({
    isLoading: false,
    isError: false,
    totalCount: 0,
    carList: [],
  });

  let content;
  switch (true) {
    case cars.isLoading:
      content = <Loading size='large' color='#99CB38' />;
      break;
    case cars.isError:
      content = (
        <Error
          message='Something went wrong'
          advice='Please try again'
          imgSource={require('../images/error.png')}
        />
      );
      break;
    case cars.carList.length === 0:
      content = (
        <Error
          message="There isn't any available car"
          advice='Perhaps, you should consider increasing monthly payment'
          imgSource={require('../images/noCar.png')}
        />
      );
      break;
    default:
      content = (
        <ImageListItem
          title='Ford Fiesta'
          variant='1.25 82 Zetec 3dr'
          img='https://vcache.arnoldclark.com/imageserver/AFRYNBH4E1-VUM3/350/f'
          monthlyPayment={120}
        />
      );
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>{content}</View>
      <View style={styles.footer}>
        <Button title="Let's Calculate Again" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  listContainer: {
    flex: 0.88,
  },
  footer: {
    flex: 0.12,
    bottom: 0,
    padding: 0,
    margin: 0,
  },
  button: {
    flex: 1,
    borderRadius: 0,
    margin: 0,
  },
});

export default Cars;
