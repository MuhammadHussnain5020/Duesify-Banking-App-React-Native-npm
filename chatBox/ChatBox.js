import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'
import Vector from '../assets/Vector.svg';
import Btn  from '../deposit/Button';
import Person1 from '../assets/p1.svg';
import Person2 from '../assets/p2.svg';
import Person3 from '../assets/p3.svg';
import Person4 from '../assets/p4.svg';
import Person5 from '../assets/p5.svg';
import Chat from '../assets/chatail.svg';
import Jahaz from '../assets/jahaz.svg';
import Mic from '../assets/mic_none_24dp_C4C4C4.svg';
import Send from '../assets/send_24dp_C4C4C4.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const ChatBox = () => {
    const navigation = useNavigation()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <View style={styles.firstHeader}>
          <Vector style={styles.vector}
          onPress={() => navigation.goBack()}
          />
          <Text style={styles.header}>Jennifer Lopez</Text>
          <Btn bgcolor='#2F2F2F' textColor='white' btnLabel="GROUP CHAT" heightbtn= {40} widthbtn={'30%'} raduiss={8}  Toping={5}  Press={() => navigation.navigate('ChatBox')} />
        </View>
        <View style={styles.secondHeader}>
            <Text style={styles.day}>MONDAY</Text>
        </View>
        <View style={styles.chat1}>
            <Person1 style={styles.person}/>
            <Chat style={styles.chat}/>
        </View>
        <View >
            <Text style={styles.tyme}>9:41 AM</Text>
        </View>
        <View style={styles.person2}>
            <Person2/>
        </View>
        <View style={styles.person2}>
            <Person3/>
        </View>
        <View style={styles.person2}>
            <Person4/>
        </View>
        <View style={styles.person2}>
            <Person5/>
        </View>
        <View style={styles.finalvaleey}>
            <TextInput
                style={styles.input}
                placeholder="Typing Message..."
                placeholderTextColor="gray"
            />
            <Mic/>
            <Icon name="emoji-emotions" size={24} color="#C4C4C4" style={styles.icon} />
            <Icon name="photo" size={24} color="#C4C4C4" style={styles.icon} />
            <Jahaz/>
            <Send style ={styles.jahaz}/>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView> 
    
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    firstHeader:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#FF7F27'
    },
    header:{
        fontFamily:'roboto',
        fontWeight:'medium',
        fontSize:18,
        color:'white',
        left:20,
    },
    vector:{
        top:10,
    },
    secondHeader:{
        top:30,
        justifyContent:'center',
        alignItems:'center',
    },
    day:{
        color:'#959595',
        fontSize:14,
        fontWeight:'light',

    },
    chat1:{
        top:40,
        flexDirection:"row",
        padding:10,

    },
    person:{
        top:20,
    },
    tyme:{
        top:25,
        left:280,
        color:'#959595',
    },
    person2:{
        left:10,
        top:25,
    },
    finalvaleey:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'100%',
        position:'absolute',
        bottom:10,
        right:-10,
        padding: 10,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        margin: 10,
      },
      icon: {
        marginHorizontal: 5,
      },
      input: {
        flex: 1,
        paddingHorizontal: 10,
        color: 'black',
      },
      jahaz:{
        position:'absolute',
        right:18,
        top:20,
      },

}
)

export default ChatBox