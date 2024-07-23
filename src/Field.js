import { TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { darkGreen } from './Constant';

const Field = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={darkGreen}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderRadius: 100,
    color: darkGreen,
    paddingHorizontal: 10,
    width: '75%',
    backgroundColor: 'rgb(220, 220, 220)',
    marginVertical: 10,  
  },
});

export default Field;
