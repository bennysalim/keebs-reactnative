import React, { Component, useState } from 'react'
import { Button, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Intro({navigation}){
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <Image style={styles.images} source={require('../assets/introimage.png')}></Image>
                    <View style={styles.caption}>
                        <Text style={styles.uptitle}>Mau cari kibor tapi {'\n'}belum dapat referensi?</Text>
                        <Text style={styles.title}>Cari info kibor favorit {'\n'}di keebs aja!</Text>
                        <Pressable style={styles.button} onPress={()=>navigation.navigate("SignUp")}>
                            <Text style={styles.text}>DAFTAR AKUN</Text>
                        </Pressable>
                        <Pressable style={styles.button2} onPress={()=>navigation.navigate("Login")}>
                            <Text style={styles.text2}>MASUK AKUN</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </>
        )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        flex:1,
        marginTop:0,
        flexDirection:'column'
    },
    caption:{
        marginStart:30,
        marginEnd:30,
    },
    images:{
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:400,
        height:250
    },
    uptitle:{
        marginTop:20,
        fontSize:21,

    },
    title:{
        marginTop:20,
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20,
    },
    button:{
        marginTop:10,
        paddingTop:14,
        paddingBottom:14,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'#011C2F',
        width:'100%'
    },
    button2:{
        marginTop:10,
        paddingTop:14,
        paddingBottom:14,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'100%',
        borderColor:'#001C2f',
        borderLeftWidth:1,
        borderEndWidth:1,
        borderBottomWidth:1,
        borderTopWidth:1,
    },
    text:{
        color:'white',
        fontWeight:'bold',
    },
    text2:{
        color:'white',
        fontWeight:'bold',
        color:'#011C2F',
    }
})