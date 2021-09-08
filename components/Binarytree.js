import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { HeaderDraw } from './HeaderDraw';
import TreeView from 'react-native-final-tree-view';
import {useSelector,useDispatch} from "react-redux";
import axios from 'axios';


import img1 from '../images/card.png';
// import { getBinaryTreeData } from '../redux/auth/AuthActions';


export const Binarytree = ({ navigation }) => {
    const dispatch = useDispatch();
    const { user} = useSelector(state => state.auth)
    // dispatch(getBinaryTreeData())
    const [treedata, setTreedata] = useState([]);

    const getBinaryTreeData = async ()  => {

        try {
            const { data } = await axios.get(`http://18.207.182.108:8085/user/getTree/${user.userData.id}`);
    
            if (data.success) {
                //dispatch({ type: GETTREEDATA, payload: data.tree })
                console.log(data)
                if(data.tree[0]!==null){
                setTreedata(data.tree)
                }
            }
    
        } catch (error) {
            console.log(error);
    
        }
    }
    

  useEffect(
        () => {
            
            // dispatch(binary(user.userData.id))
          //  dispatch(getBinaryTreeData())
            // setTreedata(tree)
            getBinaryTreeData()
        },
        []
    );

   console.log("treeeeeeeeeeeeeeeeeeeee",treedata);


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
                <HeaderDraw navigation={navigation} />
                <TreeView
                    data={treedata} // defined above
                    renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                        return (
                            <View style={{ alignItems: 'center', marginTop: 5, }}>
                                <Text
                                    style={{
                                        borderLeftWidth: 2,

                                        fontSize: 20,
                                        fontWeight: 'bold',
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
