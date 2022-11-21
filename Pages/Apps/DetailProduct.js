import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DetailProduct ({route, navigation}){
        return (
            <>
            {console.log(route.params.data)}
            <View>
                <Image source={{uri:route.params.data.gambar}} style={styles.image}></Image>
                <SafeAreaView style={styles.body}>
                    <Text style={{fontSize:20, fontWeight:'bold', marginBottom:15}}>{route.params.data.nama}</Text>
                    <Image source={require('../../assets/dots.png')}></Image>
                    <Text style={{fontSize:15, marginTop:15}}>{route.params.data.deskripsi}</Text>
                    <View style={styles.touch}>
                        <TouchableOpacity style={styles.switch}>
                            <Image style={styles.image2} source={{uri:route.params.data.gambarswitch}}/>
                            <Text>Switch : {route.params.data.switch}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.switch}>
                            <Image style={styles.image2} source={require('../../assets/tkl.jpg')}/>
                            <Text>Layout : {route.params.data.jenis}</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={{fontSize:20, fontWeight:'bold', marginBottom:15, marginTop:20}}>Harga : Rp {route.params.data.harga}</Text>
                    <Pressable style={styles.button2} onPress={()=>navigation.navigate('Product')}>
                            <Text style={styles.text2}>BACK TO MAIN</Text>
                    </Pressable>
                </SafeAreaView>
            </View>
            </>
        )
}

const styles=StyleSheet.create({
    image:{
        width:400,
        height:150
    },
    body:{
        marginLeft:20,
        marginRight:20,
        
    },
    button2:{
        paddingTop:14,
        paddingBottom:14,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'100%',
        backgroundColor:'#001c2f',
        borderColor:'#001C2f',
        borderLeftWidth:1,
        borderEndWidth:1,
        borderBottomWidth:1,
        borderTopWidth:1,
    },
    touch:{
        flexDirection: 'row',
        alignContent:'center',
    },
    text2:{
        color:'white',
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center'
    },
    switch:{
        borderColor:'#001C2f',
        marginTop:10,
        marginRight:20,
        borderLeftWidth:1,
        borderEndWidth:1,
        borderBottomWidth:1,
        borderTopWidth:1,
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    image2:{
        width:100,
        height:100
    }
})