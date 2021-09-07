/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
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

import {store,persistor} from "./redux/store"

import Screens from './components/Screens';

const pay = '../images/mobile-payment.png'
const confimpay = '../images/confirmation.png'
const refferal = '../images/third-party.png'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();







export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
       {/* <Mystack /> */}
       <Screens />
      </NavigationContainer>    
      </PersistGate>
    </Provider>
    
  );
}

