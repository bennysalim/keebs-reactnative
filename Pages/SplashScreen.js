import React, { Component } from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'


export default function SplashScreen () {
        return (
            <>
            <View style={styles.container}>
                <Image id='logo' source={require('../assets/keyboard.png')} alt='logo'
                style={styles.logo}></Image>
                <Text style={styles.logo_name}>KEEBS_</Text>
            </View>
            </>
        )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f0',
        justifyContent:'center'
    },
    logo:{
        width:160,
        height:160,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
    },
    logo_name:{
        fontSize:34,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:200,
        fontWeight:'bold'
    }
})