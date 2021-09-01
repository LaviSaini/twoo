import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput,ToastAndroid } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { HeaderDraw } from './HeaderDraw';
import { HeaderBackground } from '@react-navigation/elements';
//import img3 from '../images/background.png';


export const RefferalScreen = ({ navigation }) => {
    const [rfCode, setrfcode] = useState('')
    const writeToClipboard = () => {
        Clipboard.setString(rfCode)
        ToastAndroid.show("Copied", ToastAndroid.SHORT)
    }
    return (
        <View>
            <HeaderDraw navigation={navigation} />
            <View>
                <Text style={styles.text}>
                    Below is your referral code to share with your friends.
                </Text>
            </View>
            <View style={styles.text}>
                <Text style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.43)' }}>
                    Share it and earn points every time someone create account with this code
                </Text>
            </View>
            <View style={styles.LoginFrom}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', color: '#0D5EBD', fontSize: 16, padding: 10 }}>
                        Kindly login to your dashboard
                    </Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'arial',
                        color: 'white',
                        padding: 10

                    }}>Earn 20% on Every Share</Text>
                </View>

                <Text style={{ padding: 10 }}>Your refferal Link</Text>
                <TextInput
                    value={rfCode}
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'stretch',
                        height: 40,
                        marginBottom: 10,
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        color: 'black',
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: '#0F4271'
                    }} />


                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={writeToClipboard}
                      //  onPress={() => navigation.navigate('RefferalScreen')}
                    // onPress={() => Alert.alert('Logged In')}
                    >
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            fontFamily: 'arial',
                            color: 'white',
                            padding: 10

                        }}>Copy your Refferal Link</Text>
                    </TouchableOpacity>
                </View>
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
        width: 319,
        height: 360,
        left: 35,
        top: 50,
        backgroundColor: '#E9F1F9',
        elevation: 1,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(11, 88, 159, 0.35)',

    },
    text: {
        textAlign: 'center',
        padding: 10,
        fontFamily: 'Palanquin',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 17
    },
    button: {
        backgroundColor: '#1671C6', borderRadius: 7,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },
})