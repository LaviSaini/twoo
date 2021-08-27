import React from 'react';
import { View, StyleSheet,Text, Image, ImageBackground,TouchableOpacity } from 'react-native';
import img3 from '../images/background.png';
const img2 = '../images/logo.png'

export const Header = ({navigation}) => {
    return (
        
            <ImageBackground source={img3} resizeMode="cover" style={styles.Container}>
                <View style={{flexDirection:'row'}}>
                <View>
                <Image
                    style={styles.images}
                    source={require(img2)}
                />
                </View>
                <View style={{flexDirection:"row",marginLeft:100}}>
                    <TouchableOpacity style={styles.buttonCont} 
                      onPress={() =>navigation.navigate('Signup')}
                    >
                        <Text style={styles.buttontext}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCont}
                     onPress={() =>navigation.navigate('Login')}
                    >
                        <Text style={styles.buttontext}>Signin</Text>
                    </TouchableOpacity>
                    

                </View>
            </View>
            </ImageBackground>
    
    )

}
const styles = StyleSheet.create({
    Container: {
        
        justifyContent: "center",
        
    },
    images: {
        padding:10,
        marginLeft:5,
        marginTop:5
        

    },
    buttontext:{
        color:'#FFFFFF',
        borderColor:'#FFFFFF',
        borderRadius:5,
        borderWidth:2,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingBottom:3,
        fontSize:12,
        textAlign:'center',
        backgroundColor:'#0B589F'
        
        
    },
    buttonCont:{
       marginTop:12,
       marginLeft:20
       

    }
})
