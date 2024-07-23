import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from '../Background';
import { Green, darkGreen } from '../Constant';
import Btn from '../Btn';

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <View style={styles.container}>
          <Text style={styles.txt}>Welcome To Home!</Text>
          <Btn bgcolor ={Green} textColor ='white' btnLabel="Login" Press={()=>props.navigation.navigate("Login")
          }/>
          <Btn bgcolor ='white' textColor ={darkGreen} btnLabel="Signup"Press={()=>props.navigation.navigate("Signup")}/>
        </View>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 100,
  },
  txt: {
    color: 'white',
    fontSize: 64,
    marginBottom: 40,
  },
});

export default Home;
