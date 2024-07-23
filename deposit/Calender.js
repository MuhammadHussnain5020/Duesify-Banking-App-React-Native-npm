import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

const DateInputBox = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('');

  const onChange = ( selectedDate) => {
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
      <Text style={styles.label}>DATE*</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Select"
          value={dateText}
          editable={false}
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
    margin: 20,
  },
  label: {
    bottom:50,
    fontSize: 14,
    color: '#FF7F27',
    marginBottom: 4,
  },
  inputContainer: {
    height: 45,
    width: 180,
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 13,
    padding: 8,
    bottom:50,
  },
  input: {
    fontSize: 16,
    color: '#333',
    
  },
});

export default DateInputBox;
