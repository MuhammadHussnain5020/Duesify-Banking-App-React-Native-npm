import React from 'react';
import { ActivityIndicator, StyleSheet, Text,View, TouchableOpacity } from 'react-native';
import { darkGreen } from './Constant';

const Pbutton = ({ width, title, backgroundColor , onPress , isLoading , height }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor, width , height}]} onPress={onPress}>
      {isLoading ? <ActivityIndicator color={'white'} size={40}></ActivityIndicator>:<View style={styles.buttonTextStyle}><Text style={styles.textStyle}>{title}</Text></View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkGreen,
    opacity : '0.7',
    color: 'white',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 13,
    shadowRadius: 13,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation : 1,
    marginBottom : 5,
  },
  buttonTextStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'semibold',
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center',
    color: 'white',
    backgroundColor : 'transparent',
    bottom:3,
    
  },
});

export default Pbutton;