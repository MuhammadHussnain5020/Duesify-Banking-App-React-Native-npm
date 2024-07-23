import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Home from '../assets/home.svg'; 
import Box from '../assets/box.svg';
import Negative from '../assets/negative.svg';
import Btn  from './Button';
import Jug from '../assets/no1.svg';
import Pig from '../assets/no2.svg';
import Hand from '../assets/no3.svg';
import Calender from'./Calender';
import { useNavigation } from '@react-navigation/native';

const Desposit = () => {
  const navigation = useNavigation()
  return (
    <View style ={styles.Container}>
        <View style = {styles.home}>
          <Home style = {styles.homeStyle}/>
          <Text style = {styles.textStyle}>MAKE DEPOSIT</Text>
        </View>
        <View style = {styles.textBox}>
          <Box style = {styles.box}/>
        <View style = {styles.minusNeg}>
          <Negative style = {styles.minus}/>
          </View>
        </View>
        <View style = {styles.bankinfo}>
          <Text style = {styles.bankDetails}>Bank Details</Text>
        <View style={styles.btnn}>
          <Btn bgcolor='white' textColor='#FF7F27' btnLabel="Payment Link" heightbtn={24} widthbtn={100}  />
        </View>
        </View>
        <View style={styles.details}>
          <Jug style={styles.bank}/>
          <Pig style={styles.account}/>
          <Hand style={styles.name}/>
        </View>
        <View style={styles.depositdetails}>
          <Text style={styles.deposittext}>Deposit Confirmation</Text>
        </View>
        <Text style={styles.amountPaid}>AMOUNT PAID*</Text>
        <View style ={styles.inputBox}>
          <TextInput
          style={styles.input}
          keyboardType='numeric'
          value ={Number}
          onChangeText={Desposit}
          >
          </TextInput>
          <Calender style={styles.calnder}/> 
        </View>
        <View style={styles.endStyle}>
         <TouchableOpacity
           style={styles.btn}
           onPress={() => navigation.navigate('Details')}
           >
          <Text style={styles.btnText}>SEND ALERT</Text>
         </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.deathnote}>NOTE*</Text>
          <TextInput
          style={styles.notestyle}
          >
          </TextInput>
          <View style={styles.num}>
          <Text >0/35</Text>
          </View>
        </View>
        <View >
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,

    },
    home:{
      flexDirection:'row',
      backgroundColor:'#FF7F27'
    },
    homeStyle:{
      marginTop:8,
      left:10,
    },
    textStyle:{
      fontFamily:'roboto',
      fontSize:20,
      fontWeight:'semibold',
      color:'white',
      marginLeft: 100,
    },
    textBox :{
      backgroundColor:'#FF7F27',
    },
    box:{
      marginTop:10,
      width:'60%',
      alignItems:'center',
    },
    minus:{
      left:30,
      bottom:66,
    },
    bankinfo:{
      flexDirection:'row',
      backgroundColor:'#FF7F27',
      bottom:40,
    },
    bankDetails:{
      color:'white',
      fontFamily:'roboto',
      fontSize: 24,
      fontWeight:'bold',
      left:25,
    },
    btnn:{
      left:133,
      top:15,
    },
   details:{
      backgroundColor:'#FF7F27',
      paddingTop:10,
      bottom:40,
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:30,
   },
   
   depositdetails:{
    justifyContent:'center',
    alignItems:'center',
    bottom:20,
   },
   deposittext:{
    fontFamily:'roboto',
    fontSize:18,
    fontWeight:'bold',
   },
   amountPaid:{
    bottom:13,
    left:20,
    color: '#FF7F27',
    fontSize: 14,
   },
   inputBox:{
    padding: 16,
    bottom:25,
    flexDirection:'row',
   },
   input:{
    height: 45,
    width:'40%',
    borderRadius:10,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
   },
   calnder:{
      width:'100%',
      height:45,
   },
   deathnote:{
    bottom:150,
    left:20,
    color: '#FF7F27',
    fontSize: 14,
   },
   notestyle:{
    height: 45,
    width:'90%',
    borderRadius:10,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 16,
    bottom:150,
    left:20,
   },
   num:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    right:20,
    bottom: 237,
   },
   endStyle:{
    top:10,
    alignItems:'center',
    textAlign: 'center',
   },
  
   btn: {
    backgroundColor: '#FF7F27',
    borderRadius: 13,
    height: 50,
    width: '90%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Desposit