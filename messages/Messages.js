import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Home from '../assets/home.svg';
import Search from '../assets/search.svg'; 
import Line from '../assets/line.svg';
import Boxes from '../assets/boss.svg';
import Second from '../assets/second.svg';
import Third from '../assets/third.svg';
import Fourth from '../assets/fourth.svg';
import Fifth from '../assets/fifth.svg';
import Dp from '../assets/dp.svg';
import Bg from '../assets/chan.svg';
import Btn  from '../deposit/Button';
import { useNavigation } from '@react-navigation/native';

const Messages = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.firstMessage}>
        <Home style={styles.homeStyle}/>
        <Text style={styles.header}>Messages</Text>
      <View style={styles.numVStyle}>
        <Text style={styles.numStyle}>12</Text>
       </View>
      </View>
      <View style={styles.searchbar}>
      <View style={styles.box}>
       <View style={styles.cd}><Search  style = {styles.logos} /></View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"   
        />
        </View>
      </View>
      <View style={styles.chatbox}>
      <Text style={styles.leftheader}>All Chats</Text>
        <Line style={styles.centerheader}/>
        <Text style={styles.rightheader}>New Messages</Text>
      </View>
    <View style={styles.boxe}>
        <Boxes style={styles.imagebox1}/>
        <Dp style={styles.dps}/>
        <Text style={styles.ctext}>Asmara</Text>
        <Text style={styles.text}>Till tomorrow...</Text>
        <Bg style={styles.numpad}/>
        <Text style={styles.num}>1</Text>
        <Second style={styles.imagebox2}/>
        <Third style={styles.imagebox3}/>
        <Fourth style={styles.imagebox4}/>
        <Fifth style={styles.imagebox5}/>
    </View>
    <View style={styles.beetn}>
        <Btn
        backgroundColor='#2F2F2F'
        title="MEMBERS"
      />
      <Btn
        backgroundColor='#FF7F27'
        title="GROUP CHAT"
        onPress={() => navigation.navigate('ChatBox')}
      />
      </View>  
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 25,
        backgroundColor: '#FF7F27',
        borderBottomColor: '#E6E6E6',
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    numStyle:{
        fontSize: 13,
        color: 'white',
        left:4,
        bottom:2,

    },
    numVStyle:{
        top:3,
        backgroundColor:'black',
        borderRadius: 30,
        height: 22,
        width: 22,
    },
    searchbar:{
        backgroundColor:'#FF7F27',
        bottom:2,
        padding:5,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54.7,
        padding: 10,
        borderRadius: 13,
        marginHorizontal: 21.5,
        backgroundColor: '#fff',  
      },
      input:{
        marginHorizontal:10,
        padding:5,
      },
      chatbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 25,
        backgroundColor: '#FF7F27',
        borderBottomColor: '#E6E6E6',
        bottom:2,
    },
    leftheader:{
        fontSize: 16,
        color: 'white',
        left:45,
        bottom:1,
    },
    centerheader:{
        // fontSize: 16,
        // fontWeight: 'bold',
        // color: 'white',
        // left:15,
        // bottom:1,
    },
    rightheader:{
        fontSize: 16,
        color: '#FFFFFF66',
        right:15,
        bottom:1,
        left:-45,
    },
    boxe:{
        position:'absolute',
        top:230,
        bottom:100,
        right:-6,
    },
    dps:{
        position:'absolute',
        left:45,
        top:20,
    },
    imagebox1: {
        top:10,
    },
    imagebox2:{
       top:20,
    },
    imagebox3:{
        top:30,
    },
    imagebox4:{
        top:40,
    },
    imagebox5:{
        top:50,
    },
    ctext:{
        fontFamily:'roboto',
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        position:'absolute',
        left:110,
        top:20,
    },
    text:{
        position:'absolute',
        left:110,
        top:43,
    },
    num:{
        position:'absolute',
        left:311,
        top:35,
        color:'white',
        fontFamily:'roboto',
        fontSize:13,
    },
    numpad:{
        position:'absolute',
        left:305,
        top:40,
        color:'white',
        fontFamily:'roboto',
        fontSize:13, 
    },
    beetn:{
        flexDirection: 'row',
      justifyContent: 'space-evenly',
      top:460,
        
      },
}
)

export default Messages