import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { HeaderDraw } from './HeaderDraw';


import img1 from '../images/card.png';
export const Purchased= ({ navigation }) => {
    return (
        <>
        
            <View style={{flex:.4,}}>
                <View>
                    <HeaderDraw navigation={navigation} />
                </View>

                <View style={styles.container}>
                    <Image
                        style={{
                            height: '60%',
                            width: '100%',
                            borderRadius: 20,
                            alignItems:'center',
                        }}
                        source={require('../images/bitimage.png')} />
                    <View style={{ backgroundColor: '#FFFFFF', alignSelf: 'stretch', marginTop:20,margin: 5, borderRadius: 10 }}>
                        <Text style={styles.text}>
                            Defix Buy
                        </Text>
                    </View>


                    
                </View>
            </View>
            <View style={{flex:.6,}}>
                <View style={{ backgroundColor: '#0F0E32', alignSelf: 'stretch', margin: 5, borderRadius: 10 }}>
                        <Text style={styles.text1}>
                            Direct Members
                        </Text>
                    </View>
                <ScrollView style={{marginTop:20}}>
                   <View style={styles.scrollscreen}>
                       <View >
                       <Text style={styles.text2}>Users with 20% Refferals</Text>
                        </View>
                        <View style={{flexDirection:'row',}}>
                            <Image 
                            style={styles.cardImage}
                            source={require('../images/Group.png')}/>
                           
                            <Text style={styles.cardText}>4</Text>
                        </View>
                   </View>
                   <View style={styles.scrollscreen}>
                       <View>
                       <Text style={styles.text2}>User with 50% Refferals</Text>
                        </View>
                        <View style={{flexDirection:'row',}}>
                            <Image 
                            style={styles.cardImage}
                            source={require('../images/Group.png')}/>
                           
                            <Text style={styles.cardText}>4</Text>
                        </View>
                   </View>
                   
                </ScrollView>
            </View>
        
</>

    )

}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        margin: 1,
        borderRadius: 20


    },
    text: {
        textAlign: 'center',
        padding: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#190A7D'
    },
    text1: {
        textAlign: 'center',
        padding: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        borderRadius: 10
    },
    text2: {
        textAlign: 'left',
        padding: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        borderRadius: 10
    },
    BgImage: {
        width: '100%',
        marginTop: 20

    }, Bgcard1: {
        marginTop: 10,
        width: '100%',
        height: '20%'
     },
     cardImage:{
            height:30,
            width:30,
            margin:10,
            alignItems:'flex-start',
            padding:5
     },
     cardText:{
         textAlign:'right',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF',
        flexGrow:1,
        marginTop:8,
        marginRight:10,
        marginLeft:10,
        padding:5
     },
    Bgcard2: {
        width: '100%',
        height: '40%'

    },
    scrollscreen: {
        backgroundColor: '#2E2C69',
        alignSelf: 'stretch',
        margin: 5,
        borderRadius: 2,
        padding:15


    }
})