import { View, Text, StyleSheet,TextInput ,Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Profile from '../assets/profile.svg';
import Setting from '../assets/setting.svg';
import Search from '../assets/search.svg';
import Pbutton from './Pbutton';
import { darkGreen } from './Constant';
import Message from './Message';
import ButtonS from './ButtonS';
import ButtonB from './ButtonB';
import ButtonO from './ButtonO';
import ButtonT from './Button3';
import ButtonF from './Button4';
import { useNavigation } from '@react-navigation/native';


const Account = () => {
  const navigation = useNavigation()
  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style = {styles.container}>
        <View style={styles.wel}>
          <Text style={styles.first}>Welcome Back</Text>

        </View>
        <View style={styles.init}>
          <Profile />
          <Text style={styles.namaye}>Johnson Estate</Text>
          <Setting style={styles.sett}/>
        </View>

      <View style={styles.box}>
       <View style={styles.cd}><Search  style = {styles.logos} /></View>
        <View style={styles.textContainer}>
        <TextInput
          style={styles.input}
          placeholder="Member Search..."
          placeholderTextColor="gray"   
        />
       </View>
      </View>
      <View style={styles.betns}>
      <Message backgroundColor={'white'} textColor ='black' title={'Messages'}  width={'25%'} height={60} fontSize ={13} style={styles.fb}/>
      <ButtonO backgroundColor={'#288BAA'} title={'                     :         $578,789.00 ' } width={'70%'} height={60}/>
      </View>
      <View style={styles.betn}>
      <ButtonS backgroundColor={darkGreen} textColor ='black' title={'CREDIT                +'} width={'48%'} height={150} style={styles.fb}/>
      <ButtonT backgroundColor={'#C467FE'} title={'DEBIT                   -'} width={'48%'} height={150} onPress={ ()=> navigation.navigate('QRcode')}/>
      </View>
      <View style={styles.betnt}>
        
      <ButtonB backgroundColor={'#04CD89'} textColor ='black' title={'MEMBERS'} width={'48%'} height={150} style={styles.fb}/>
      <ButtonF backgroundColor={'#DC1A8D'} title={'DEPOSIT ALERT'} width={'48%'} height={150} onPress={() => navigation.navigate('Desposit')}/>

      </View>
      <View style={styles.beetn}>
      <Pbutton backgroundColor={'black'} title={'PREMIUM'} width={'48%'} height={50}/>
      <Pbutton backgroundColor={darkGreen} title={'LOG OUT'} width={'48%'} height={50}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
    );
  };
const styles = StyleSheet.create({
container:{
    flex: 1,
},
wel:{
    paddingTop:78.5,
    backgroundColor:"#FF7F27",
    
    
},
first:{
    color:'white',
    fontFamily:'roboto',
    fontSize: 20,
    margin:10,
    
},
init:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#FF7F27',
    bottom:15,

},
namaye:{
    paddingHorizontal:45,
    justifyContent:'center',
    fontFamily:'roboto',
    fontSize:24,
    bottom:15,
    color:'white',
},
sett:{
    bottom: 7,
},
box: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54.7,
    padding: 10,
    borderRadius: 13,
    margin: 21.5,
    backgroundColor: '#fff',
    bottom:60,   
  },
  input:{
    marginHorizontal:10,
    padding:3,
  },
  betn:{
    flexDirection : 'row',
    justifyContent : 'space-between' ,
    margin : 20,
    bottom : 120, 
  },
 betns:{
    flexDirection : 'row',
    justifyContent : 'space-between' ,
    margin : 20,
    bottom : 90, 
 },
 betnt:{
    flexDirection : 'row',
    justifyContent : 'space-between' ,
    margin : 20,
    bottom : 150, 
 },
 tran:{
    top:100,
    right:140
 },
 beetn:{
    flexDirection : 'row',
    justifyContent : 'space-between' ,
    margin : 20,
    bottom: 180,
 },

})

export default Account