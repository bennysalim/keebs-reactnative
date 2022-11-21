import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'

export default function LupaPasswordKeebs ({navigation}){
        return (
            <>
            <View style={styles.container}>
                <Image id='logo' source={require('../assets/keyboard.png')} alt='logo'
                style={styles.logo}></Image>
                <Text style={{marginTop:15, 
                alignContent:'center',
                alignSelf:'center',
                alignItems:'center',
                justifyContent:'center'}}>Lupa password? {'\n'}masukkan email Anda</Text>
                <TextInput placeholder='Email'  textContentType='emailAddress' style={styles.input}></TextInput>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>RESET PASSWORD</Text>
                </Pressable>
                <Pressable style={styles.button2} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.text2}>BALIK KE LOGIN</Text>
                </Pressable>
            </View>
            </>
        )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:30,
        marginRight:30,
        flexDirection:'column'
    },
    logo:{
        width:120,
        height:120,
        marginTop:5,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
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
    },
    input:{
        paddingTop:10,
        paddingBottom:10,
        marginBottom:300,
        borderColor:'#001C2f',
        borderBottomWidth:1,
    },
})
