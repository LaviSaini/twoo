/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Payment } from './components/Payment';
import { ConfirmPayment } from './components/ConfirmPayment';
import { RefferalScreen } from './components/RefferalScreen';
import { Active } from './components/Active';
import { FrontLineUsers } from './components/FrontLineUsers';
import { Purchased } from './components/Purchased';
import { TokenRewarded } from './components/TokenRewarded';
import { TokenSold } from './components/TokenSold';
import { Total_Members } from './components/Total_Members';
import { Direct_Members } from './components/Direct_Members';
import { Binarytree } from './components/Binarytree';

const pay = '../images/mobile-payment.png'
const confimpay = '../images/confirmation.png'
const refferal = '../images/third-party.png'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack1 = createStackNavigator();
{/*const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Payment') {
              iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Refferal') {
              iconName = focused ? 'bookmark' : 'bookmark';
          } else if (route.name === 'Confirm Payment') {
              iconName = focused ? 'apps' : 'apps';
          } 
          return (
              <Icon
                  name={iconName}
                  size={25}
                  color={color}
              />
          );
      },
      tabBarStyle:{
        backgroundColor: '#0D063D',
      },
      tabBarLabelStyle:{
        fontWeight:'bold',
        fontSize:10,
        color:'#FFFFFF',
        marginBottom:1
        }
  })}
      tabBarOptions={{
          swipeEnabled: false,
          tabBarPosition: 'bottom',
          activeTintColor: '#8888f7',
          inactiveTintColor: '#f0f0f0',
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
          },
      }}>
    
      <Tab.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <Tab.Screen name="Refferal" component={RefferalScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Confirm Payment" component={ConfirmPayment} options={{ headerShown: false }} />

    </Tab.Navigator>
  );
}*/}
function MyDrawer() {
  return (
    <Drawer.Navigator 
   
    screenOptions={{
      drawerStyle:{
        width: 250,
        backgroundColor: '#0D063D',
        },
        drawerLabelStyle:{
          fontWeight:'bold',
          fontSize:15,
          color:'#FFFFFF'
        }
    }}
    
    initialRouteName="Payment">
      <Drawer.Screen name="Binary Tree" component={Binarytree} options={{ headerShown: false }} />
      <Drawer.Screen name="Total Members" component={Total_Members} options={{ headerShown: false }} />
      <Drawer.Screen name="Direct Members" component={Direct_Members} options={{ headerShown: false }} />
      <Drawer.Screen name="Active" component={Active} options={{ headerShown: false }} />
      <Drawer.Screen name="Defix Token Rewarded" component={TokenRewarded} options={{ headerShown: false }} />
      <Drawer.Screen name="Total Defix Token Sold" component={TokenSold} options={{ headerShown: false }} />
      <Drawer.Screen name="Defix Purchased" component={Purchased} options={{ headerShown: false }} />
      <Drawer.Screen name="Front Line Users" component={FrontLineUsers} options={{ headerShown: false }} />
      <Drawer.Screen name="Refferal" component={RefferalScreen} options={{ headerShown: false }} />
      {/*<Drawer.Screen name="Confirm Payment" component={ConfirmPayment} options={{ headerShown: false }} />*/}
      <Drawer.Screen name="Payment" component={Mystack1} options={{ headerShown: false }} />
      

    </Drawer.Navigator>
  )
}

function Mystack1(){
  return(
    <Stack1.Navigator>
    <Stack1.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
    <Stack1.Screen name="Confirm Payment" component={ConfirmPayment} options={{ headerShown: false }} />
    </Stack1.Navigator>
  )
}
function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Payment" component={MyDrawer} options={{ headerShown: false }} />
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

