import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

const DateInputBox = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDateText(currentDate.toLocaleDateString());
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="From"
          placeholderTextColor="gray"
          value={dateText || ''}
          editable={true}
        />
        <TouchableOpacity onPress={showDatepicker}>
          <Icon name="calendar-outline" size={24} color="#FF7F00" />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    margin: 20,
    top: -25,
    left: 20,
  },
  inputContainer: {
    height: 46,
    width: 105,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
  },
  input: {
    fontSize: 12,
    color: '#333',
    flex:1,
    padding: 3
  },
});

export default DateInputBox;
