import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { darkGreen } from './Constant';
import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const ButtonS = ({ width, title, backgroundColor , onPress , isLoading , height }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor, width , height}]} onPress={onPress}>
      <LinearGradient colors={['#40AFD2', '#288BAA']}  start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1}} style={styles.linearGradient}>
    <View style = {styles.ssh}><Text style={styles.sh}>Outstanding</Text></View>
      {isLoading ? <ActivityIndicator color={'white'} size={40}></ActivityIndicator>:<Text style={styles.textStyle}>{title} </Text>}
      </LinearGradient>
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
  linearGradient: {
    flex: 1,
    borderRadius: 13,
  
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    margin:10,
    backgroundColor : 'transparent',
    bottom:30,
    textAlign: 'center',
  },
  ssh:{
    left:10,
    top:24,
    
  },
  sh:{
    color:'white',
    fontSize:18,
    bottom: 12,
  },
});

export default ButtonS;