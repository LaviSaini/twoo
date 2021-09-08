import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { HeaderDraw } from './HeaderDraw';


const confirm = '../images/confirm.png'
export const ConfirmPayment = ({ navigation }) => {
    return (


        <View style={{ flex: 1 }}>
            <View>
                <HeaderDraw navigation={navigation} />
            </View>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>

                <View style={styles.LoginFrom}>
                    <View>
                        <Text style={styles.text}>
                            Your payment is confirmed
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RefferalScreen')}
                        // onPress={() => Alert.alert('Logged In')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16,
                                fontWeight: 'bold',
                                fontFamily: 'arial',
                                color: 'white',
                                padding: 10

                            }}>Click Here To Refresh</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.43)' }}>
                            Your are now eligible for getting sharing address.
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', padding: 10 }}>
                        <Image source={require(confirm)} />
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 13, marginLeft: 15, color: 'rgba(0, 0, 0, 0.43)' }}>
                            Press next to generate your sharing address
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Refferal')}
                        // onPress={() => Alert.alert('Logged In')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16,
                                fontWeight: 'bold',
                                fontFamily: 'arial',
                                color: 'white',
                                padding: 10

                            }}>Click Here To Refresh</Text>
                        </TouchableOpacity>
                    </View>
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
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#E9F1F9',
        elevation: 1,
        borderRadius: 10,
        borderWidth: 2,
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
        backgroundColor: '#2D2D6D', borderRadius: 30,
        alignItems: 'center',
        marginBottom: 5
    },
})