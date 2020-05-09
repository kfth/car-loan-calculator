import React, { useState } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import InputContainer from './InputContainer';

const DatePicker = ({ setDate, date }) => {
  const [showTitle, setShowTitle] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeHandler = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <TouchableHighlight
      onPress={() => {
        setShowDatePicker(true);
        setShowTitle(true);
      }}
    >
      <InputContainer>
        {showTitle && <Text style={styles.title}>Select Delivery Date</Text>}
        <Text style={styles.dateText}>
          {date ? moment(date).format('DD-MM-YYYY') : 'Select Delivery Date'}
        </Text>
        {showDatePicker && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            value={new Date()}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChangeHandler}
          />
        )}
      </InputContainer>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    color: '#7030a0',
  },
  dateText: {
    color: '#7030a0',
    fontWeight: 'bold',
    height: 40,
    marginTop: 8,
  },
});
export default DatePicker;
