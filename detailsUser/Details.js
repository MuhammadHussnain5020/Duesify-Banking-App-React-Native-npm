import { View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import Home from '../assets/home.svg'; 
import Profile from '../assets/prefer.svg';
import Money from '../assets/money.svg';
import Calender from './Calender';
import Btn  from '../deposit/Button';
import ToCalender from './ToCalender';
import Debit from '../assets/debit.svg';
import Credit from '../assets/creditt.svg';
import Box from '../assets/lastbox.svg';
import Logo from '../assets/lofo.svg';
import Setting from '../assets/sett.svg';
import { useNavigation } from '@react-navigation/native';
const Details = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.txt}>DUESIFY</Text>
     </View>
      
       <LinearGradient colors={['#FF7F27', '#F55F48', '#EF4A5D']}  start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0}} style={styles.linearGradient}>
            <Text style={styles.name}>Johnson Estate</Text>
            <Text style={styles.amount}>633.00 USD</Text>
            <View style={{position : 'absolute' , top : -50 , right : -15}}>
              <Profile/>
            </View>
             <View style={styles.firststar}>
              <Image 
              source={require('..//assets/star.png')}
              style={styles.imageStyle}/>
              </View>
             <View style={styles.homeV}>
              <Home style={styles.homeS}/>
              <Text style={styles.switch}>SWITCH</Text>
              <Money style={styles.money}/>
             </View>
        </LinearGradient>
        <View style={styles.recentheader}>
          <Text style={styles.recent}>Recent Transactions</Text>
        </View>
        <View style={styles.daterow}>
          <Text style={styles.filterrr}>Filter</Text>
          <Calender />
          <ToCalender style={styles.scalender}/>
          <View style={styles.buttonView}>
          <Button
           title="View"
           color="#FF7F27"
           style={styles.buttonStyle}
          />
          </View>
        </View>
        <ScrollView>
        <View style={styles.totalTrans}>
          <Image
          source={require('../assets/coin.png')}
          style ={styles.coinss}
          />
          <Debit style={styles.debitss}/>
          <Image
          source={require('../assets/pig.png')}
          style ={styles.pigs}
          />
          <Credit style={styles.creditss}/>
          
          <Image
          source={require('../assets/coin.png')}
          style ={styles.coinsss}
          />
          <Debit style={styles.debitSecond}/>
          <Image
          source={require('../assets/pig.png')}
          style ={styles.pigss}
          />
          <Credit style={styles.creditsecond}/>
        </View>
        </ScrollView>
        <Box style={styles.boxwhite}/>
        <View style={styles.detailsend}>
          <Logo style={styles.logoDesign}/>
          <Text style={styles.textDesign}>Ben Oyeyami</Text>
          <Setting style={styles.settingDesign}/>
        </View>
        <View>
          <Text style={styles.numberDesign}>+93224642767</Text>
        </View>
        <View style={styles.beetn}>
        <Btn
        backgroundColor='#2F2F2F'
        title="SUPPORT"
      />
      <Btn
        backgroundColor='#FF7F27'
        title="PAY NOW"
        onPress={() => navigation.navigate('Messages')}
      />
      </View>  
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      marginTop:69,
      justifyContent: 'center',
      alignItems: 'center',
    },
    txt: {
      fontSize: 32,
      fontFamily: 'roboto',
      fontWeight: 'bold',
      color: '#FF7F27',
    },
    linearGradient:{
        margin:10,
        borderRadius:12,
    },
    name:{
        left:20,
        fontSize:27,
        fontWeight:'bold',
        color:'white',
    },
    amount:{
        left:20,
        fontSize:24,
        color:'white',
        marginBottom : 30
    },
    firststar:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    imageStyle:{
      flex : 1,
      margin : 10
    },
    homeS:{
      left:10,
      margin:10
    },
    homeV:{
      flexDirection:'row',
    },
    switch:{
      fontSize: 16,
      fontFamily:'roboto',
      color:'white',
      position:'absolute',
      right:235,
      top:10
    },
    money:{
      position:'absolute',
      right:15,
      top:8,
    },
    recentheader:{
      marginTop:20,
      left:10,


    },
    recent:{
      fontFamily:'roboto',
      fontSize: 18,
      fontWeight:'bold'
    },
    daterow:{
      top:20,
      flexDirection:'row',
      justifyContent: 'space-between',
      left:10,
    },
    filterrr:{
      fontSize:14,
      fontFamily:'roboto',
      fontWeight:'bold',
    },
    totalTrans:{
      top:20,
     justifyContent:'center',
     alignItems:'center',
     zIndex:1,
     bottom:0,
    },
    debitss:{
      position:"absolute",
      bottom:280,
    },
    creditss:{
      top:23,
    },
    debitSecond:{
      bottom:25,
    },
    creditsecond:{
      bottom:70,
    },
    coinss:{
      position:'absolute',
      right:300,
      top:-10,
      zIndex:1
    },
    pigs:{
      position:'absolute',
      right:300,
      top:60,
      zIndex:1
    },
    coinsss:{
      position:'absolute',
      right:300,
      top:128,
      zIndex:1
    },
    pigss:{
      position:'absolute',
      right:300,
      top:200,
      zIndex:1
    },
    boxwhite:{
      position:'absolute',
      bottom:-10,
      right:-75
    },
    detailsend:{
      flexDirection:'row',
      position:'absolute',
      bottom:30,
      justifyContent:'space-between',
      margin:10,
      left:10,
      bottom:60,
    },
    textDesign:{
      left:20,
      fontSize:18,
      fontWeight:'bold',
      color:'black'
    },
    settingDesign:{
      left:140,
      top:5
    },
    numberDesign:{
      position:'absolute',
      left:90,
      bottom:70
    },
    beetn:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    buttonView:{
      height: 46,
      width: '20%',
      right: 20,
      bottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

export default Details