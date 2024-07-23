import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from "./src/assets/Home";
import Signup from "./src/Signup";
import Login from "./src/Login";
import TermsandConditions from "./src/TermsandConditions";
import Profile from "./src/Profile";
import Account from "./src/Account";
import Desposit from "./deposit/Desposit";
import Details from "./detailsUser/Details";
import Messages from "./messages/Messages";
import ChatBox from "./chatBox/ChatBox";
import Count from "./hooks/Count";
import TimerCounter from "./hooks/TimerCounter";
import QRcode from "./qrCode/QRcode";
const Stack = createNativeStackNavigator();

function App(){
  return(
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component = {Home}/>
        <Stack.Screen name="Login" component = {Login} />
        <Stack.Screen name="Signup" component = {Signup}/>
        <Stack.Screen name="TermsandConditions" component = {TermsandConditions}/>
        <Stack.Screen name="Profile" component = {Profile} />
        <Stack.Screen name="Account" component = {Account} />
        <Stack.Screen name="Desposit" component = {Desposit} />
        <Stack.Screen name="Details" component = {Details} />
        <Stack.Screen name="Messages" component = {Messages} />
        <Stack.Screen name="ChatBox" component = {ChatBox} />
        <Stack.Screen name="Count" component = {Count} />
        <Stack.Screen name="QRcode" component = {QRcode} />
        <Stack.Screen name="TimerCounter" component = {TimerCounter} />
        {/* <Stack.Screen name="WebViewScreen" component={WebViewScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;