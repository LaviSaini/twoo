import React from 'react';
import { View,Text } from 'react-native';
import { Header } from './Header';

export const Dashboard=({navigation})=>{
    return(

        <View>
            <Header navigation={navigation}/>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20,textAlign:'center'}}>
                Welcome To Dashboard
            </Text>
        </View>
    )
}