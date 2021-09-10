import React from "react";
import { useSelector } from "react-redux";

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { Welcome } from './Welcome';
import { Login } from "./Login";
import { Signup } from './Signup';
import { Payment } from './Payment';
import { ConfirmPayment } from './ConfirmPayment';
import { RefferalScreen } from './RefferalScreen';
import { Active } from './Active';
import { FrontLineUsers } from './FrontLineUsers';
import { Purchased } from './Purchased';
import { TokenRewarded } from './TokenRewarded';
import { TokenSold } from './TokenSold';
import { Total_Members } from './Total_Members';
import { Direct_Members } from './Direct_Members';
import { Binarytree } from './Binarytree';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();




const Screens = () => {

  const { isAuth, user } = useSelector(state => state.auth)

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
          tabBarStyle: {
            backgroundColor: '#0D063D',
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 10,
            color: '#FFFFFF',
            marginBottom: 1
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
        

      </Tab.Navigator>
    );
  }

  function MyDrawer() {
    return (
      <Drawer.Navigator

        screenOptions={{
          drawerStyle: {
            width: 250,
            backgroundColor: '#0D063D',
          },
          drawerLabelStyle: {
            fontWeight: 'bold',
            fontSize: 15,
            color: '#FFFFFF'
          }
        }}

        initialRouteName="Payment">



        {
          user.userData.referralCode === null ? <>
            <Drawer.Screen name="Payment" component={MyTab} options={{ headerShown: false }} />
            <Drawer.Screen name="ConfirmPayment" component={ConfirmPayment} options={{ headerShown: false }} />
            <Drawer.Screen name="Refferal" component={RefferalScreen} options={{ headerShown: false }} />
          </>
            :



            <>

              <Drawer.Screen name="Binary Tree" component={Binarytree} options={{ headerShown: false }} />
              <Drawer.Screen name="Total Members" component={Total_Members} options={{ headerShown: false }} />
              <Drawer.Screen name="Direct Members" component={Direct_Members} options={{ headerShown: false }} />
              <Drawer.Screen name="Active" component={Active} options={{ headerShown: false }} />
              <Drawer.Screen name="Defix Token Rewarded" component={TokenRewarded} options={{ headerShown: false }} />
              <Drawer.Screen name="Total Defix Token Sold" component={TokenSold} options={{ headerShown: false }} />
              <Drawer.Screen name="Defix Purchased" component={Purchased} options={{ headerShown: false }} />
              <Drawer.Screen name="Front Line Users" component={FrontLineUsers} options={{ headerShown: false }} />
              <Drawer.Screen name="Refferal" component={RefferalScreen} options={{ headerShown: false }} />
              <Drawer.Screen name="ConfirmPayment" component={ConfirmPayment} options={{ headerShown: false }} />
            </>
        }




      </Drawer.Navigator>
    )
  }

  const DashboardScreens = () => {
    return <>
      <MyDrawer />
    </>
  }
  const AuthScreens = () => {
    return <>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  }



  return (
    <>
      {!isAuth ? <AuthScreens /> : <DashboardScreens />}
    </>
  )

}

export default Screens;