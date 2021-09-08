import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from './Header';
import axios from 'axios'

import {login} from "../redux/auth/AuthActions"

const email = '../images/email.png'
const pwd = '../images/pwd.png'
const fb = '../images/fb.png'
const gogle = '../images/google.png'
const eyeopen = '../images/view.png'
const hidden = '../images/visibility.png'





export const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    const [Email, setemail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setpassword] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [eyeOpen, setEyeopen] = useState(false);



    const handleLogin = () => {
       
        const errors = [];

        if (Email === "") {
        errors.push(1);
        }
        if (password === "") {
         errors.push(1);
        }

      

        

         if (Email != '') {
             setEmailError('');
          } else {
             setEmailError('Hey! email should not be Empty');

        }

         if (password != '') {
             setpasswordError('');

          } else {
             setpasswordError('Password should not Empty')
        
          }
        if (errors.length === 0) {
            dispatch(login(Email,password))
        }

    }
    return (
        <View>
            <View>
                <Header navigation={navigation} />
            </View>
            <View>
                <Text style={styles.Logintext}>LogIn</Text>
            </View>
            <View style={styles.LoginFrom}>

                <View style={{
                    marginTop: 30, marginLeft: 5, marginRight: 5, flexDirection: 'row', borderBottomColor: 'black',
                    borderBottomWidth: 0.5
                }}>
                    <Image source={require(email)} style={{ marginTop: 25, marginLeft: 5, marginRight: 5, paddingLeft: 5 }} />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your Email"
                        placeholderTextColor="black"
                        keyboardType='email-address'
                        onChangeText={(text) => setemail(text)}
                        value={Email}
                    />

                </View>

                <View>
                    <Text style={{ color: 'red', textAlign: 'left' }}>{emailError}</Text>
                </View>
                <View style={{
                    marginLeft: 5, marginRight: 5,
                    flexDirection: 'row', borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                }}>
                    <View style={{ flexDirection: "row" }}>

                        <Image source={require(pwd)} style={{ marginTop: 25, marginLeft: 5, marginRight: 5, padding: 5, position: "absolute", left: 0 }} />

                        <TextInput
                            style={{ paddingLeft: 30, width: "100%",color:'black' }}
                            placeholder="Enter your password"
                            placeholderTextColor="black"
                            secureTextEntry={eyeOpen ? false : true}
                            onChangeText={(text) => setpassword(text)}
                            value={password}
                        />


                        {eyeOpen ? (
                            <TouchableOpacity onPress={() => setEyeopen(!eyeOpen)} style={{ position: "absolute", right: 10, top: 12 }}>
                                <Image source={require(eyeopen)}
                                />
                            </TouchableOpacity>)
                            : (

                                <TouchableOpacity style={{ position: "absolute", right: 10, top: 12, }} onPress={() => setEyeopen(!eyeOpen)} >
                                    <Image source={require(hidden)}
                                    />
                                </TouchableOpacity>)
                        }



                    </View>

                </View>
                <View>
                    <Text style={{ color: 'red', textAlign: 'left' }}>{passwordError}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#0D5EBD', textAlign:'left', fontSize: 13 }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity
                      onPress = {handleLogin}
                    >
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            fontFamily: 'arial',
                            color: 'white',
                            padding: 10

                        }}>LogIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ top: 120 }}>
                <Text style={styles.text}>or LogIn with</Text>
            </View>
            <View style={{ flexDirection: 'row', top: 130, justifyContent: 'center' }}>
                <Image
                    style={styles.fbg}
                    source={require(gogle)} />
                <Image
                    style={styles.fbg}
                    source={require(fb)} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 150, justifyContent: 'center' }}>
                <Text style={styles.text}>New User ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#0D5EBD', fontSize: 16, marginLeft: 10 }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    Logintext: {

        textAlign: 'center',
        top: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',

    },
    LoginFrom: {
        //width: 319,
        //height: 240,
        //left:35,
        top: 100,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        backgroundColor: '#E9F1F9',
        elevation: 1,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(11, 88, 159, 0.35)',

    },
    formInput:
    {
        flexGrow: 1,
        marginTop: 5,
        // marginRight: 50,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 13,
        color: '#000000',
        //borderWidth: 2
    },
    button: {
        backgroundColor: '#2D2D6D', borderRadius: 10,
        //marginTop: 15,
        //marginLeft: 60,
        //marginRight: 60,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 5


    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        color: '#606060',
        textAlign: 'center'

    },
    fbg: {
        height: 40,
        width: 40,
        margin: 5
    },


})
