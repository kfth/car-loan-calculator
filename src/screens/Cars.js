import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import axios from 'axios';

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

  useEffect(() => {
    setCars({ ...cars, isLoading: true });
    axios
      .get(URI)
      .then(({ data }) => {
        console.log('total cars:::', data.count);
        setCars({
          ...cars,
          carList: data.searchResults.slice(0, 6),
          totalCount: data.count,
          isLoading: false,
          isError: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setCars({
          ...cars,
          isLoading: false,
          isError: true,
        });
      });
  }, [monthlyPayment]);

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
        <FlatList
          data={cars.carList}
          keyExtractor={(item) => item.stockReference}
          renderItem={({ item, index }) => {
            console.log(item);
            return (
              <ImageListItem
                title={`${item.make} ${item.model}`}
                variant={item.variant}
                img={item.thumbnails[0]}
                monthlyPayment={item.salesInfo.pricing.monthlyPayment}
              />
            );
          }}
        />
      );
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.headerText}
        >{`Showing ${cars.carList.length} of ${cars.totalCount} Cars`}</Text>
      </View>
      <View style={styles.listContainer}>{content}</View>
      <View style={styles.footer}>
        <Button
          title="Let's Calculate Again"
          style={styles.button}
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    backgroundColor: '#99CB38',
    alignContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: '#7030a0',
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
