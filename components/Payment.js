import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useSelector } from "react-redux";
import { HeaderDraw } from './HeaderDraw';
import axios from 'axios';

const pwd = '../images/wallet.png'
const token = '../images/Vector.png'
const amount = '../images/Amount.png'
const id = '../images/Id.png'
const currency = '../images/currency.png'
export const Payment = ({ navigation }) => {
    const { user } = useSelector(state => state.auth)
    const [shouldShow, setShouldShow] = useState(false);
    const [buttonShow, setButtonShow] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [Currrency, setCurrency] = useState('');
    const [Item, setItem] = useState([]);
    const [Tokens, setToken] = useState('');
    const [Pay, setpay] = useState('');
    const [address, setAddress] = useState('');
    const [mes,setMes] = useState('');

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

            axios.get(`http://18.207.182.108:8085/user/exhangeRate/${Tokens}/${selectedCurrency}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(function (response) {

                    console.log(response.data)

                    setShouldShow(true);
                    setButtonShow(false);
                    if (Currrency === 'BTC') {
                        setpay(response.data.amountToPay)
                        setAddress(response.data.btcAddress)
                        setMes(response.data.message)
                    } else {
                        setpay(response.data.amountToPay)
                        setAddress(response.data.ethAddress)
                        setMes(response.data.message)
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    alert("Backend not respond")
                })
        } else {
            alert("Fill All Fields")
        }
    }
    const Confirmpayment = ()=>{
        axios.post(`http://18.207.182.108:8085/user/buyTokens`,{
            amountToPay: Pay,
            coin: selectedCurrency.toLowerCase(),
            userId: user.userData.id
        } ,{
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {

                console.log(response.data)
               
              
                if(response.data.success){
                    alert(response.data.message)
                   
                    setShouldShow(false)
                    setButtonShow(true)
                    
                }
              

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert("Backend not respond")
            })
    
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <HeaderDraw navigation={navigation} />
            </View>
            <View style={{ flexGrow:1, justifyContent: 'center' }}>
          
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Make your First Payment To Activate your Account</Text>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 14,marginBottom:10 }}>Pay to start in Two-Tier Referral Program</Text>
            
            
                <View style={styles.LoginFrom}>
                    <View style={{
                        marginLeft: 5, marginRight: 5,
                        flexDirection: 'row', borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                    }}>

                        <Image 
                        style ={{alignself:'center'}}
                         source={require(currency)} />
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
                            style={{ paddingLeft: 50, width: "100%", color: 'black' }}
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
                                    style={{ paddingLeft: 50, width: "100%", color: 'black' }}
                                    placeholder="Amount"
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
                                    style={{ paddingLeft: 50, width: "100%", color: 'black' }}
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
                                    style={{ paddingLeft: 50, width: "100%" ,color: 'black' }}
                                    placeholder="Transaction Id"
                                    placeholderTextColor="black"
                                    value={mes}
                                />


                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                //onPress={() => navigation.navigate('Payment', {screen: 'ConfirmPayment'})}
                                //onPress={() => { setShouldShow(true); setButtonShow(false) }}
                                onPress={Confirmpayment}
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
                                onPress={() => pay()}
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
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: 'Palanquin',
        fontWeight: 'normal',
        color: '#000000'
    },
    LoginFrom: {
        padding: 10,
        alignSelf: 'center',
        //justifyContent:'center',
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
        fontSize: 15,
        width: 280,
        color: 'black'
    },
    button: {
        backgroundColor: '#2D2D6D', borderRadius: 30,
        alignItems: 'center',
        marginTop: 5




    },
})