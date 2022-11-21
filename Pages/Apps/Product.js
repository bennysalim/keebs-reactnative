import React, { Component, useEffect, useState } from 'react'
import { Text, View, Pressable, StyleSheet, TextInput, FlatList, TouchableOpacity, Button, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TestData }from './testdata'
import axios from 'axios'


const baseURL="https://keebs-1223a-default-rtdb.firebaseio.com/keebs/keyboard.json";

const client=axios.create({
    baseURL:baseURL,
});

// const GetData=()=>{
//     try{
//         const res=await axios.get('https://keebs-1223a-default-rtdb.firebaseio.com/keebs.json',{
//             params:{}
//         })
//     }catch(error){
//         alert(error.message)
//     }
// }

export default function Product ({navigation}){
    const [keyboard, setKeyboard] = useState('');

    // const GetData=()=>{
    //     client
    //     .get(`/keyboard`)
    //     .then((res)=>{
    //         const data1=res.data.data;
    //         console.log("keyboard: ",data1);
    //         setKeyboard(data1);
    //     })
    //     .catch((err)=> handleError(err));
    // };

    const GetData=async()=>{
    try{
        const res=await axios.get('https://keebs-1223a-default-rtdb.firebaseio.com/keebs.json');
        // console.log(res.data.keyboard);
        setKeyboard(res.data.keyboard);
    }catch(error){
        alert(error.message)
    }
}

    useEffect(()=>{
        GetData();
    },[]);

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <Pressable style={styles.button} onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.text}>Sign Out</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>navigation.navigate('Credits')}>
                        <Text style={styles.text}>About Me</Text>
                    </Pressable>
                    <View style={{
                        alignContent:'flex-end', justifyContent:'flex-end',alignSelf:'center', alignItems:'flex-end',
                        flexDirection:'row'}}>
                        {/* <TextInput placeholder='cari keyboard disini'
                        style={{justifyContent:'flex-end', alignContent:'flex-end', alignItems:'flex-end',alignSelf:'flex-end',
                        marginLeft:20, borderColor:'#011C2F',borderBottomWidth:1, fontSize:15}}></TextInput> */}
                    </View>
                </View>
                <Text style={{
                    marginTop:15,
                    fontSize:22,
                    fontWeight:'bold',
                    marginBottom:20
                }}>Welcome {'\n'}Take a look these cool keebs {':>'}</Text>
                <View>
                <FlatList
                data={keyboard}
                numColumns={2}
                renderItem={({item})=>(

                        <TouchableOpacity style={styles.column} onPress={()=>navigation.navigate('DetailProduct',{
                            data:item
                        })}>
                            <Image style={styles.gambardata} source={{uri:item.gambar}}/>
                            <Text style={{fontWeight:'bold', fontSize:20}}>{item.nama}</Text>
                            <Text style={styles.textharga}>Rp {item.harga}</Text>
                        </TouchableOpacity>
                )}
                />
                </View>
            </SafeAreaView>
        )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        marginTop:0,
    },
    column:{
        borderRadius:'40%'
    },
    row:{
        flexDirection:'row',
        marginRight:20,
    },
    button:{
        backgroundColor:'#011C2F',
        padding:10,
        flexShrink:1,
        marginRight:10
    },
    text:{
        color:'white'
    },
    column:{
        flex:1,
        paddingHorizontal:15,
        paddingBottom:5,
        backgroundColor:'white',
        marginLeft:5,
        marginEnd:5,
        marginTop:10,
        alignContent:"center",
        alignSelf:'center',
        shadowColor:'#011C2F',
        shadowOpacity:30,

    },
    gambardata:{
        width:175,
        height:175,
        alignSelf:'center', 
    },
})