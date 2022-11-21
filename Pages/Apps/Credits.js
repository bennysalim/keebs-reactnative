import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Credits (){
        return (
            <View>
                <Image source={require('../../assets/fotobenni.jpeg')} 
                style={{borderRadius:100, alignSelf:'center', width:150, height:150, marginTop:15}}/>
                <Text style={{marginTop:10, alignSelf:'center', fontWeight:'bold', fontSize:20}}>Benny Septiawan Salim
                </Text>
                <Text style={{marginTop:10, alignSelf:'center'}}>Newb. Soft. Developer
                </Text>
                <View style={{marginTop:10, alignSelf:'center'}}>
                    <AntDesign name="instagram" size={18} color="black" style={styles.ant}> madebybss</AntDesign>
                    <AntDesign name="linkedin-square" size={18} color="black" style={styles.ant}> Benny Septiawan Salim</AntDesign>
                </View>
                <View style={{margin:30, alignSelf:'center'}}>
                    <Text style={{marginBottom:10, fontWeight:'bold'}}>Tech Stack Used : </Text>
                    <FontAwesome name="html5" size={16} color="black"> HTML5, CSS Web FrontEnd</FontAwesome>
                    <FontAwesome5 name="python" size={16} color="black"> Python Data Analytics</FontAwesome5>
                </View>
                <TouchableOpacity style={styles.contactme}>
                </TouchableOpacity>
            </View>
        )
}

const styles=StyleSheet.create({
    ant:{
        marginTop:7
    }
})