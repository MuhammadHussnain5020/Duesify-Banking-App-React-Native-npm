import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import Background from './Background';
import { darkGreen } from './Constant';
import Field from './Field';
import Btn from './Btn';

const Signup = (props) => {
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const handleSginUp =() => {
    console.log('User Name:', name)
    console.log('Email / UserName:', email)
    console.log('Password:', password)
    props.navigation.navigate("TermsandConditions");
  }
  return (
    <Background>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Sign Up
        </Text>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>
            Register Here!
          </Text>
          <Text style={styles.signupText}>
            Sign Up For new Account
          </Text>
          <Field placeholder="User Name" keyboardType="default" onChangeText={setName} 
            value={name} />
          <Field placeholder="Email / Username" keyboardType="email-address" onChangeText={setEmail} 
            value={email} />
          <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} 
            value={password} />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <Btn bgcolor={darkGreen} textColor='white' btnLabel="Sign Up" Press={handleSginUp} />
          <Text style={styles.loginPrompt}>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
  </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop:-10,
  },
  header: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 10,
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    height: 700,
    width: 460,
    borderTopLeftRadius: 230,
    paddingTop: 100,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: darkGreen,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    width: '78%',
    paddingRight: 16,
    marginBottom: 10,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginHorizontal:55,
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginPrompt: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  loginText: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Signup;
