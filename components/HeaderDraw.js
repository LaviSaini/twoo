import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import img1 from '../images/Drawerback.png'
const img2 = '../images/headbar.png'

export const HeaderDraw = ({ navigation }) => {
    return (
        <View style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15
        }}>
            <ImageBackground source={img1} resizeMode="cover" style={styles.Container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Image
                                style={styles.images}
                                source={require(img2)}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonCont}>
                        <TouchableOpacity style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={styles.buttontext}>Signup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.buttontext}>Signin</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {

        justifyContent: "center",
        marginTop: 0,
        height: 50,


    },
    images: {
        alignItems: 'flex-start',
        marginTop: 5,
        height: 20,
        width: 20,
        marginLeft: 10


    },
    buttontext: {
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: '#2D2D6D'


    },
    buttonCont: {
        flexDirection: 'row',
        marginRight: 10
    }
})
