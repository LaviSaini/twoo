import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Header } from './Header';
import { Picker } from '@react-native-picker/picker'
import CountryPicker from 'react-native-country-picker-modal'
import axios from 'axios'


const fb = '../images/fb.png'
const gogle = '../images/google.png'
const name = '../images/name.png'
const email = '../images/email.png'
const phone = '../images/phone.png'
const pwd = '../images/pwd.png'
const country = '../images/country.png'
const currency = '../images/currency.png'

export const Signup = ({ navigation }) => {
    const [Name, setName] = useState('');
    const [errorName, seterrorName] = useState('');
    const [Email, setEmail] = useState('');
    const [errorEmail, seterrorEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [errorPhone, seterrorPhone] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [Currrency, setCurrency] = useState('');
    const [errorCurrency, seterrorCurrency] = useState('');
    const [countryCode, setCountryCode] = useState("");
    const [errorcountryCode, seterrorCountryCode] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errorconfirmPassword, seterrorconfirmPassword] = useState('');



    const regis = () => {
        //const API= 'http://18.207.182.108:8085/user/register'
        //  const payload = { email:"user1@gmail.com", password:"1234" };


        const errors = [];

        if (password != confirmPassword) {
            seterrorconfirmPassword('Password Does Not Match')
            errors.push(1);
        } else {
            seterrorconfirmPassword('')
        }
        if (Email != '') {
            seterrorEmail('')
        } else {
            seterrorEmail('Email should not be Empty')
            errors.push(1)
        }

        if (password != '') {
            setErrorPassword('')
        } else {
            setErrorPassword('Password should Not empty')
            errors.push(1)
        }
        if (Name != '') {
            seterrorName('')
        } else {
            seterrorName('Please enter your name')
            errors.push(1)
        }
        if (Phone != '') {
            seterrorPhone('')
        } else {
            seterrorPhone('Enter your phone')
            errors.push(1)
        }

        if (countryCode != '') {
            seterrorCountryCode('')
        } else {
            seterrorCountryCode('Select Country Code')
            errors.push(1)
        }
        if (selectedCurrency != '') {
            seterrorCurrency('')
        } else {
            seterrorCurrency('Select Currency')
            errors.push(1)
        }
        console.log(Currrency)
        if (errors.length === 0) {

            axios.post('http://18.207.182.108:8085/user/register',
                {

                    country: countryCode,
                    currency: Currrency,
                    email: Email,
                    mobileNo: Phone,
                    name: Name,
                    parentReferralCode: "sPr3uekdEV5ejUOtuNW0UHauoG4zlxvyqI",
                    password: password,
                    userName: 'lavi1996',

                }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(function (response) {
                    console.log(response.data);
                    // console.warn(response.data.message);
                    if (response.data.success) {
                        navigation.push('Login')
                    }


                })
                .catch(function (error) {
                    console.log(error.response.data);

                    if (error.response.data.error === "This email already exist in our database.") {
                        alert("Email already exist")
                    }
                    else {
                        alert("Please submit all details")
                    }

                });
        }






    }
    const [Item, setItem] = useState([])
    useEffect(
        () => {
            axios.get('http://18.207.182.108:8085/user/getAllCoins', {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(function (response) {
                    // handle success
                    console.log(response.data.coins)
                    setItem(response.data.coins)

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

        },
        [],
    );
    const onSelectCountry = (country) => {
        setCountryCode(country.cca2);
    };
    return (
        <View>
            <View>
                <Header navigation={navigation} />
            </View>
            <View>
                <Text style={styles.signtext}>Sign Up</Text>
            </View>
            {/*  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                    style={styles.fbg}
                    source={require(gogle)} />
                <Image
                    style={styles.fbg}
                    source={require(fb)} />
    </View>*/}
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>or register with Email</Text>
            </View>
            <View style={styles.signform}>

                <View style={styles.forms}>
                    <Image source={require(name)} />

                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your name"
                        placeholderTextColor="black"
                        onChangeText={(text) => setName(text)}
                        value={Name}
                    />
                </View>
                <Text style={{ color: 'red', textAlign: 'left' }}>{errorName}</Text>
                <View style={styles.forms}>
                    <Image source={require(email)} />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your email"
                        placeholderTextColor="black"
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text)}
                        value={Email}
                    />
                </View>
                <Text style={{ color: 'red', textAlign: 'left' }}>{errorEmail}</Text>
                <View style={styles.forms}>
                    <Image source={require(phone)} />
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your phone"
                        placeholderTextColor="black"
                        keyboardType='number-pad'
                        onChangeText={(text) => setPhone(text)}
                        value={Phone}
                    />
                </View>

                <Text style={{ color: 'red', textAlign: 'left' }}>{errorPhone}</Text>



                <View style={styles.forms}>
                    <Image source={require(country)} />


                    <View >


                        <CountryPicker
                            containerButtonStyle={{ marginLeft: 5, marginTop: 10, flexGrow: 1, padding: 12 }}
                            nfb countryCode={countryCode}
                            withFilter
                            withCountryNameButton
                            onSelect={onSelectCountry}
                        />


                    </View>
                    <Text style={{ color: 'red', textAlign: 'left' }}>{errorcountryCode}</Text>
                </View>
                <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View style={styles.forms}>
                        <Image source={require(currency)} />
                        <View >
                            <Picker
                                style={styles.formInput}
                                selectedValue={selectedCurrency}

                                onValueChange={(e) => { setCurrency(e); setSelectedCurrency(e) }}>
                                {
                                    Item.map(e => <Picker.Item label={e.label} value={e.coin} key={e.coin} />)
                                }

                            </Picker>
                        </View>
                    </View>
                    <Text style={{ color: 'red', textAlign: 'left' }}>{errorCurrency}</Text>
                    <View style={styles.forms}>
                        <Image source={require(pwd)} />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Enter your password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                    </View>
                    <View>
                        <Text style={{ color: 'red', textAlign: 'left' }}>{errorPassword}</Text>
                    </View>

                    <View style={styles.forms}>
                        <Image source={require(pwd)} />

                        <TextInput
                            style={styles.formInput}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            placeholderTextColor="black"
                            onChangeText={(text) => setconfirmPassword(text)}
                        />
                    </View>
                    <View>
                        <Text style={{ color: 'red', textAlign: 'left' }}>{errorconfirmPassword}</Text>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => regis()}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'arial',
                                color: 'white',
                                padding: 10

                            }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    signtext: {
        //position: 'absolute',
        // width: 81,
        //left: 140,
        //top: 10,
        textAlign: 'center',
        justifyContent: 'space-around',
        alignContent: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000'
    },
    forms: {
        flexDirection: 'row', borderBottomColor: 'black',
        borderBottomWidth: 1, alignItems: 'center', elevation: 1
    },
    fbg: {
        height: 40,
        width: 40,
        margin: 5
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        color: '#606060'

    },
    signform: {

        margin: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E9F1F9',
        paddingBottom: 10,
        elevation: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(11, 88, 159, 0.35)'

    },
    formInput: {

        //marginTop: 5,
        //marginLeft: 5,
        // alignItems:'baseline',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 13,
        width: 280,
        color: '#000000'
    },
    button: {
        backgroundColor: '#2D2D6D', borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5
    },
})
