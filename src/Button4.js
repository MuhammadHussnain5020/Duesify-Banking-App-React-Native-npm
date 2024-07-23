import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { darkGreen } from './Constant';
import Credit from '../assets/credit.svg';
import Star from '../assets/credit-payment-svgrepo-com.svg'



const ButtonS = ({ width, title, backgroundColor , onPress , isLoading , height }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor, width , height}]} onPress={onPress}>
        <View style = {styles.creddd}><Credit style = {styles.cred}/></View>
        <Star style={styles.dollar}/>
      {isLoading ? <ActivityIndicator color={'white'} size={40}></ActivityIndicator>:<Text style={styles.textStyle}>{title} </Text>}
      <View style = {styles.ssh}><Text style={styles.sh}>Management</Text></View>
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
    alignItems: 'left',
    borderRadius: 13,
    shadowRadius: 13,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation : 1,
    marginBottom : 5,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    margin:10,
    backgroundColor : 'transparent',
    top:  2
  },
  ssh:{
    left:10,
    bottom:20,
  },
  sh:{
    color:'white',
  },
  creddd:{
    top:15,
  },
  dollar:{
    left:20,
    bottom:30,
    borderRadius:10,
  },
});

export default ButtonS;