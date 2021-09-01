import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { HeaderDraw } from './HeaderDraw';
import axios from 'axios';

const pwd = '../images/wallet.png'
const token = '../images/Vector.png'
const amount = '../images/Amount.png'
const id = '../images/Id.png'
const currency = '../images/currency.png'
export const Payment = ({ navigation }) => {
    const [shouldShow, setShouldShow] = useState(false);
    const [buttonShow, setButtonShow] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [Currrency, setCurrency] = useState('');
    const [Item, setItem] = useState([]);
    const [Tokens, setToken] = useState();
    const [Pay,setpay] = useState();
    const [address,setAddress] = useState();

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
    const pay = () => {

        if (Currrency !== '' && Tokens !== '') {

            axios.get(`http://18.207.182.108:8085/user/exhangeRate/${Tokens}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(function (response) {
                    
                    console.log(response.data)
                    setShouldShow(true); 
                    setButtonShow(false);
                    if (Currrency==='BTC'){
                        setpay(response.data.btcExchangeRate)
                        setAddress(response.data.btcAddress)
                    }else{
                        setpay(response.data.ethExchangeRate)
                        setAddress(response.data.ethAddress)
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    alert("Fields Empty")
                })
        } else {
            alert("Fill All Fields")
        }
    }
    return (
        <View>
            <View>
                <HeaderDraw navigation={navigation} />
            </View>
            <View style={styles.text}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Make your First Payment To Activate your Account</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 14, }}>Pay to start in Two-Tier Referral Program</Text>
            </View>
            <View style={styles.LoginFrom}>
                <View style={{
                    marginLeft: 5, marginRight: 5,
                    flexDirection: 'row', borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                }}>
                    
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
                <View style={{
                    marginLeft: 5, marginRight: 5,
                    flexDirection: 'row', borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                }}>
                    <Image source={require(token)} style={{ marginTop: 10, alignItems: 'flex-start', padding: 5, position: "absolute", left: 0 }} />
                    <TextInput
                        // style={styles.formInput}
                        style={{ paddingLeft: 50, width: "100%" }}
                        placeholder=" Enter Tokens"
                        placeholderTextColor="black"
                        onChangeText={setToken}
                    />


                </View>
                
                {shouldShow ? (
                    <View>
                        <View style={{
                            marginLeft: 5, marginRight: 5,
                            flexDirection: 'row', borderBottomColor: 'black',
                            borderBottomWidth: 0.5,
                        }}>
                            <Image source={require(amount)} style={{ marginTop: 10, alignItems: 'flex-start', padding: 5, position: "absolute", left: 0 }} />
                            <TextInput
                                // style={styles.formInput}
                                style={{ paddingLeft: 50, width: "100%" }}
                                placeholder="Pay Coins"
                                placeholderTextColor="black"
                                value={Pay}
                            />


                        </View>

                        <View style={{
                            marginLeft: 5, marginRight: 5,
                            flexDirection: 'row', borderBottomColor: 'black',
                            borderBottomWidth: 0.5,
                        }}>
                            <Image source={require(amount)} style={{ marginTop: 10, alignItems: 'flex-start', padding: 5, position: "absolute", left: 0 }} />
                            <TextInput
                                // style={styles.formInput}
                                style={{ paddingLeft: 50, width: "100%" }}
                                placeholder="Your ETH Payment Address"
                                placeholderTextColor="black"
                                value={address}
                            />


                        </View>


                        <View style={{
                            marginLeft: 5, marginRight: 5,
                            flexDirection: 'row', borderBottomColor: 'black',
                            borderBottomWidth: 0.5,
                        }}>
                            <Image source={require(id)} style={{ marginTop: 10, alignItems: 'flex-start', padding: 5, position: "absolute", left: 0 }} />
                            <TextInput
                                // style={styles.formInput}
                                style={{ paddingLeft: 50, width: "100%" }}
                                placeholder="Transaction Id"
                                placeholderTextColor="black"
                            />


                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            // onPress={() => { setShouldShow(true); setButtonShow(false) }}
                           // onPress={() => navigation.navigate('ConfirmPayment')}
                        // onPress={() => Alert.alert('Logged In')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'arial',
                                color: 'white',
                                padding: 10,
                                paddingLeft: 50,
                                paddingRight: 50

                            }}>Pay now</Text>
                        </TouchableOpacity>
                    </View>) : null}
                
                <View style={styles.button}>
                    {buttonShow &&
                        <TouchableOpacity
                          //  onPress={() => pay()}
                        onPress={() =>pay() }
                        // onPress={() => navigation.navigate('Payment')}
                        // onPress={() => Alert.alert('Logged In')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'arial',
                                color: 'white',
                                padding: 10,
                                paddingLeft: 50,
                                paddingRight: 50

                            }}>Calculate</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        top: 50,

        fontFamily: 'Palanquin',
        fontWeight: 'normal',
        color: '#000000'
    },
    LoginFrom: {
        width: 319,
        height: 300,
        left: 35,
        top: 100,
        backgroundColor: '#E9F1F9',
        elevation: 1,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(11, 88, 159, 0.35)',

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
        backgroundColor: '#1671C6', borderRadius: 30,
        alignItems: 'center',
        margin: 20,
        marginTop: 30,




    },
})