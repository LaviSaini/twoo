import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from 'react-native';


const img1 = '../images/mainImage.png'
const img2 = '../images/signup-bg.png'
export const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >

                <Image
                    style={styles.images}
                    source={require(img2)}
                />
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={styles.text}>WELCOME</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={styles.texting}>
                    Find Deals For Your Delivery Errons
                </Text>
                <Text style={styles.texting}>
                    Around The Time
                </Text>
            </View>
            <View style={styles.button}>
                <Pressable
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: 'arial',
                        color: 'white',
                        padding: 10

                    }}>SIGN UP</Text>
                </Pressable>
            </View>

            <View style={styles.button1}>
                <Pressable
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: 'arial',
                        color: 'white',
                        padding: 10

                    }}>SIGN IN</Text>
                </Pressable>
            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginRight: 2,
        marginTop: 1,
        height: '100%',
        backgroundColor: 'white'
    },
    images: {

        marginBottom: 30,
        width: '100%',



    },
    backImage: {

        justifyContent: "center",
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        width: 200
    },
    text: {

        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'arial'
    },
    texting: {
        textAlign: 'center',
        fontSize: 15
    },
    button: {
        backgroundColor: '#1671C6', borderRadius: 30,
        alignItems: 'center',
        margin: 10


    },
    button1: {
        backgroundColor: '#2F2847', borderRadius: 30,
        alignItems: 'center',
        margin: 10

    }


})