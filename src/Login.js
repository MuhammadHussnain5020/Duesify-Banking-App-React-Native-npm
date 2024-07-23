import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Keyboard , KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import Background from './Background';
import { darkGreen } from './Constant';
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log('Email / Username', email)
    console.log('Password:', password);
    props.navigation.navigate("TermsandConditions");
  };

  return (
    <Background>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Login
        </Text>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>
            Welcome Back
          </Text>
          <Text style={styles.loginText}>
            Login To Your Account
          </Text>
          <Field 
            placeholder="Email / Username" 
            keyboardType="email-address" 
            onChangeText={setEmail} 
            value={email} 
          />
          <Field 
            placeholder="Password" 
            secureTextEntry={true} 
            onChangeText={setPassword} 
            value={password} 
          />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <Btn 
            bgcolor={darkGreen} 
            textColor='white' 
            btnLabel="Login" 
            Press={handleLogin} 
          />
          <Text style={styles.signupPrompt}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={styles.signupText}>Signup</Text>
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
  },
  header: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 10,
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
  loginText: {
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
    alignSelf: 'flex-start',
    textAlign:'auto',
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupPrompt: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  signupText: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
