/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Welcome } from './components/Welcome';
import {Login} from './components/Login';
import { Signup } from './components/Signup';
import { Payment } from './components/Payment';
import {ConfirmPayment} from './components/ConfirmPayment';
import { RefferalScreen } from './components/RefferalScreen';
import { Active } from './components/Active';
import { FrontLineUsers } from './components/FrontLineUsers';
import { Purchased } from './components/Purchased';
import { TokenRewarded } from './components/TokenRewarded';
import { TokenSold } from './components/TokenSold';
import { Total_Members } from './components/Total_Members';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer(){
  return(
    <Drawer.Navigator initialRouteName="Payment">
       <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="Total Members" component={Total_Members}/>
        <Drawer.Screen name="Active" component={Active}/>
        <Drawer.Screen name="Defix Token Rewarded" component={TokenRewarded}/>
        <Drawer.Screen name="Total Defix Token Sold" component={TokenSold}/>
        <Drawer.Screen name="Defix Purchased" component={Purchased}/>
        <Drawer.Screen name="Front Line Users" component={FrontLineUsers}/>
        <Drawer.Screen name="Refferal" component={RefferalScreen} />
       
       
     
    </Drawer.Navigator>
  )
}
function Mystack(){
  return(
  <Stack.Navigator>
  <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
  <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="Payment" component={MyDrawer} options={{ headerShown: false }} />
  <Stack.Screen name="Confirm Payment" component={ConfirmPayment}/>
  </Stack.Navigator>
  )
}



export default function App() {
  return (
  <NavigationContainer>
    
    <Mystack />
    
  </NavigationContainer>
  );
}

