import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert} from 'react-native'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default function LoginKeebs ({navigation}){
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [isError, setisError]=useState('false');

    const submit = async () => {
		try {
			const auth = getAuth();
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const user = userCredential.user;
			navigation.navigate("Product", {
				email: user.email,
			});
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			Alert.alert("Failed to login", errorMessage);
		}
	};

        return (
            <>
            <View style={styles.container}>
                <Image id='logo' source={require('../assets/keyboard.png')} alt='logo'
                style={styles.logo}></Image>

                <TextInput 
                placeholder='Email'  
                textContentType='emailAddress' 
                style={styles.input}
                onChangeText={text=>setEmail(text)}
                ></TextInput>

                <TextInput 
                placeholder='dummy password' 
                textContentType='password' 
                style={styles.input}
                onChangeText={text=>setPassword(text)}
                secureTextEntry
                ></TextInput>


                <Text style={styles.syarat}>Masukkan minimal 6 karakter</Text>
                {/* <Text style={styles.lupapw} onPress={()=>navigation.navigate('LupaPassword')}>duh lupa password nih!{'\n'}klik disini untuk reset password</Text> */}


                <Pressable style={styles.button} onPress={submit}>
                    <Text style={styles.text}>LOGIN</Text>
                </Pressable>
                <Pressable style={styles.button2} onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.text2}>BELUM PUNYA AKUN</Text>
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
        marginBottom:80,
    },
    lupapw:{
        marginTop:80,
        fontSize:16,   
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        fontWeight:'bold',
        marginBottom:10
    }
})