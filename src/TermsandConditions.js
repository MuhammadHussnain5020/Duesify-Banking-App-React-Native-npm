import { View, Text, Image, StyleSheet } from 'react-native';
import Btn from './Btn';
import React from 'react'

const TermsandConditions = (props) => {
  return (
        <View style={styles.container}>
          <View style={styles.img1}>
        <Image 
          source={require('./assets/Group_732.png')}
          style={styles.logo}
        />
        </View>
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('./assets/Group_731.png')}
            style={styles.illustration}
          />
          </View>
          <View style={styles.debt}>
          <Text style={styles.boldd}>Debt Payment Management</Text>
          </View>
          <View style={styles.smallHeading}>
           <Text style={styles.description}>
          Dues, Levies, Rent, Thrifts, Loans, Savings etc
          within organization, community or business.
        </Text>
        </View>
        <View style={styles.ways}>
        <Text style={styles.loginOptions}>TWO WAYS LOGIN | ADMIN & MEMBERS</Text>
        </View>
        <View style={styles.btn}>
        <Btn bgcolor ='#FF7F27' textColor ='white' btnLabel="Get Started"Press={()=>props.navigation.navigate("Profile")}/>
        </View>
        <View style={styles.ftext}>
        <Text style={styles.footerText}>
          By using Duesify app, you agree to the
           Terms of Service and Privacy Policies
        </Text>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        
      },
      img1:{
        alignItems: 'center',
        marginTop: 70,
      },
      
      illustrationContainer: {
        alignItems: 'center',
        marginTop: 15,
        
      },

      debt: {
        alignItems:'center',
        marginTop:19,
        
      },
      boldd: {
        fontSize: 16,
        fontFamily:'Roboto',
        lineHeight: 18.75,
        fontWeight: '700',
        color: '#333D41',        

      },
      smallHeading: {
          alignItems: 'center',
          textAlign:"center",
          paddingHorizontal:55,
          marginTop: 13,
          
      },
      description: {
        // paddingHorizontal:55,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        color: 'rgba(51, 61, 65, 0.72)',
        fontSize: 16,
        // bottom:150,

  
      },
      ways:{
          alignItems: 'center',
          marginTop: 3,
          
      },
      loginOptions: {
        // alignItems: 'center',
        // textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000',
       
        display: 'flex',
        // justifyContent: 'center'
      },
      btn:{
        alignItems:'center',
        textAlign:'center',
        marginTop: 15,
      },
      getStartedButton: {
        backgroundColor: '#FF7F27',
        width: 300,
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 13,
        
  
        
      },
      getStartedButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        bottom: 4,
      },
      ftext:{
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 14,
      },
      footerText: {
        paddingHorizontal:55,
        marginLeft:15,
        marginRight:15,
        fontFamily:'Roboto',
        fontWeight: '400',
        lineHeight: 20,
        color: '#D9D9D9',
        fontSize: 15,
  
      },
    });
    

export default TermsandConditions