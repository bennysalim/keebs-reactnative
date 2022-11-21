import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from 'react-native'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export default function SignUpKeebs({navigation}){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [isError, setisError]=useState('false');

	const submit = async () => {
		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const user = userCredential.user;
			Alert.alert(
				"Successfully Register",
				`User with email ${user.email} has been registered`,
			);
			console.log(user);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			Alert.alert("Failed register user", errorMessage);
		}
	};



        return (            
            <>
            <View style={styles.container}>
            
                <Image id='logo' source={require('../assets/keyboard.png')} alt='logo'
                style={styles.logo}></Image>

                <TextInput 
                placeholder='Email (real email)' 
                textContentType='emailAddress' 
                style={styles.input}
                value={email}
                onChangeText={text=>setEmail(text)}></TextInput>

                <TextInput 
                placeholder='dummy password' 
                textContentType='password' 
                style={styles.input} 
                value={password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry></TextInput>

                <Text 
                style={styles.syarat}>
                    Masukkan minimal 6 karakter</Text>

                <Pressable style={styles.button} onPress={submit}>
                    <Text style={styles.text}>BUAT AKUN</Text>
                </Pressable>

                <Pressable style={styles.button2} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.text2}>SUDAH PUNYA AKUN</Text>
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
        marginBottom:10,
        borderColor:'#001C2f',
        borderBottomWidth:1,
    },
    syarat:{
        fontWeight:'bold',
        marginBottom:160,
    },
})
