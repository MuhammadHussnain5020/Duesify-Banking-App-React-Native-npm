import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Pbutton = ({ width, title, backgroundColor , onPress , isLoading , height }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor, width , height}]} onPress={onPress}>
      {isLoading ? <ActivityIndicator color={'white'} size={40}></ActivityIndicator>:<Text style={styles.textStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF7F27',
    opacity : '0.7',
    color: 'white',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    shadowRadius: 13,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation : 1,
    marginBottom : 5,
    bottom:150,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: 'white',
    backgroundColor : 'transparent'
  },
});

export default Pbutton;