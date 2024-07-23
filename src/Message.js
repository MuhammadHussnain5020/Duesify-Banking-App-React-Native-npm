import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native'
import Bink from '../assets/bank-svgrepo-com.svg';
const Pbutton = ({ width, title, backgroundColor , onPress , isLoading , height }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor, width , height}]} onPress={onPress}>
      <View style={styles.cd}><Bink style = {style= styles.bankai}/></View>
      {isLoading ? <ActivityIndicator color={'Black'} size={40}></ActivityIndicator>:<Text style={styles.textStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    opacity : '0.7',
    color: 'white',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    shadowRadius: 13,
    shadowColor: 'white',
    shadowOpacity: 0.9,
    elevation : 1,
    marginBottom : 5,
  },
  textStyle: {

    fontSize: 13,
    fontWeight: 'semibold',
    textAlign: 'center',
    margin:10,
    color: 'black',
    backgroundColor : 'transparent',


  },
  cd:{
    backgroundColor:'#FF7F27',
    borderRadius: 30 ,
    padding : 8,
    top:17,
  },
});

export default Pbutton;