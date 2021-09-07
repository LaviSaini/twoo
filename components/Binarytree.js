import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { HeaderDraw } from './HeaderDraw';
import TreeView from 'react-native-final-tree-view';
import {useSelector} from "react-redux";
import axios from 'axios';


import img1 from '../images/card.png';


export const Binarytree = ({ navigation }) => {
    const {user} = useSelector(state => state.auth)
    const [treedata, setTreedata] = useState([]);
    useEffect(
        () => {
            axios.get(`http://18.207.182.108:8085/user/getTree/${user.userData.id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(function (response) {
                    // handle success
                   
                    console.log(response.data)
                    setTreedata(response.data.tree)
                    const len = Object.keys(response.data.tree[0]['children']).length
                    console.log(len);
                    console.log(response.data.tree[0]['children'])



                })
                .catch(function (error) {
                    // handle error
                    console.log(error);

                })

        },
        [],
    );
    function getIndicator(isExpanded, hasChildrenNodes) {
        if (!hasChildrenNodes) {
          return ''
        } else if (isExpanded) {
          return '-'
        } else {
          return '+'
        }
      }
    return (
        <View>
            <HeaderDraw navigation={navigation}/>
            <TreeView
                data={treedata} // defined above
                renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                    return (
                        <View style={{alignItems:'center',marginTop:5,}}>
                            <Text
                                style={{
                                    borderLeftWidth:2,
                                    
                                    fontSize:20,
                                    fontWeight:'bold',
                                    marginLeft: 25 * level,
                                }}
                            >
                                {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                            </Text>
                        </View>
                    )
                }}
            />
            


        </View>

    )

}
