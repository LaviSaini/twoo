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
            <View style={{ marginTop: 10 }}>
                <Text style={styles.text}>WELCOME</Text>
            </View>
            <View style={{ marginTop: 20, paddingBottom:15 }}>
                <Text style={styles.texting}>
                    Find Deals For Your Delivery Errons
                </Text>
                <Text style={styles.texting}>
                    Around The Time
                </Text>
            </View>
            <View style={{paddingHorizontal:10,paddingTop:5}}>
                <Pressable
                style={styles.button}
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

            <View style={{paddingHorizontal:10,paddingTop:15}}>
                <Pressable
                style={styles.button1}
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
        width:'100%',
        height:'100%',
        backgroundColor: 'white',
        alignSelf:'center',
        paddingBottom:10
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
    


    },
    button1: {
        backgroundColor: '#2F2847', borderRadius: 30,
        alignItems: 'center',
    

    }


})