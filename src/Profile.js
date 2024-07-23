import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { darkGreen } from './Constant';
import Dots from '../assets/dots.svg';
import Calen from '../assets/date-of-birth.svg';
import Lock from '../assets/lock.svg';
import Add from '../assets/adeen.svg';
import Vector from '../assets/Vector.svg';
import Pbutton from './Pbutton';
import Mail from '../assets/email.svg';
import State from '../assets/earth.svg';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Edit from '../assets/edit.svg';
import Remove from '../assets/remove.svg';
const Profile = () => {
  const [image, setImage] = useState('');
  const navigation = useNavigation();
  const cencelImage = () =>{
    setImage('');
  }

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImage(source);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.header}>
            <Vector
              onPress={() => navigation.goBack()}
              style={styles.exitIcon}
              />
            <Text style={styles.headerText}>PROFILE</Text>
            <Dots style={styles.dotsIcon} />
          </View>
          <View style={styles.logo}>
              <TouchableOpacity onPress={cencelImage}>
                <Remove style={styles.remover}/>
            </TouchableOpacity>
            {image ? <Image source={image} style={styles.profileImage}/> : null }
              <View style={styles.circle}>
            <TouchableOpacity onPress={openCamera}>
              <Edit style={styles.editor}/>
            </TouchableOpacity>
              </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Muhammad Hussnain</Text>
            <Text style={styles.phoneText}>+923177260907</Text>
          </View>
          <View style={styles.scrolladjust}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.fieldContainer}>
                <View style={styles.field}>
                  <View style={styles.iconbgColor}>
                    <Mail style={styles.icon} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="savesify@gmail.com"
                      placeholderTextColor="#000"
                    />
                  </View>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.field}>
                  <View style={styles.iconbgColor}>
                    <Calen style={styles.icon} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="25 DEC 2001"
                      placeholderTextColor="#000"
                    />
                  </View>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.field}>
                  <View style={styles.iconbgColor}>
                    <Lock style={styles.icon} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="********"
                      placeholderTextColor="#000"
                      secureTextEntry={true}
                    />
                  </View>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.field}>
                  <View style={styles.iconbgColor}>
                    <Add style={styles.icon} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="23, Billing Way, New York"
                      placeholderTextColor="#000"
                    />
                  </View>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.field}>
                  <View style={styles.iconbgColor}>
                    <State style={styles.icon} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>Country</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="America"
                      placeholderTextColor="#000"
                    />
                  </View>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.buttonContainer}>
            <Pbutton backgroundColor={darkGreen} title={'REMOVE ADS'} width={'48%'} height={50} onPress={() => navigation.navigate('Count')} />
            <Pbutton backgroundColor={'black'} title={'SHARE APP'} width={'48%'} height={50} onPress={() => navigation.navigate('TimerCounter')} />
          </View>
          <View style={styles.buttonContainer}>
            <Pbutton backgroundColor={'#288BAA'} title={'Download More Awesome Apps'} height={50} width={'100%'} onPress={() => navigation.navigate('Account')} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FF7F27',
  },
  exitIcon: {
    width: 25,
    height: 25,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Roboto',
  },
  dotsIcon: {
    width: 25,
    height: 25,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: "#FF7F27",
    width: "100%",
    height: "22%",
    
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 74,
    objectFit : 'stretch',
    
  },
  circle: {
    width: 154,
    height: 154,
    borderRadius: 76.5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderBlockColor:'#000000',
    borderWidth: 2,
    borderColor:'#FFFFFF',
    position:'absolute',
    bottom:17,
    
    
  },
  editor:{
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    top:121,
    left:40,
    zIndex:1
  },
  remover:{
    position:'absolute',
    bottom:0,
    right:0,
    left:100,
    top:120,
    
  },
  nameContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#FF7F27",
    width: "100%",
  },
  nameText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 24,
  },
  phoneText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: 'white',
  },
  scrolladjust: {
    flex: 1,
    marginTop: -20,
  },
  scrollContent: {
    marginTop: 30,
    flexGrow: 1,
    paddingVertical: 15,
    bottom: 50,
  },
  fieldContainer: {
    paddingHorizontal: 20,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 13,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  iconbgColor: {
    backgroundColor: '#C4C4C4',
    borderRadius: 30,
    padding: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  textContainer: {
    flexGrow: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  input: {
    fontSize: 16,
    color: '#000',
    padding: 0,
  },
  editButton: {
    marginRight: 10,
  },
  editButtonText: {
    color: '#FF7F27',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default Profile;
