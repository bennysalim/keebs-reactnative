import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import LoginKeebs from './Pages/LoginKeebs';
import SignUpKeebs from './Pages/SignUpKeebs';
import Intro from './Pages/Intro'
import LupaPasswordKeebs from './Pages/LupaPasswordKeebs';
import Index from './Pages/Apps/index';
import Product from './Pages/Apps/Product';
import DetailProduct from './Pages/Apps/DetailProduct';
import Credits from './Pages/Apps/Credits'

const Stack = createStackNavigator();

export default function indexpertama() {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro" >
            <Stack.Screen name='Selamat Datang' component={Intro} />
            <Stack.Screen name='Login' component={LoginKeebs} />
            <Stack.Screen name='SignUp' component={SignUpKeebs} />
            <Stack.Screen name='LupaPassword' component={LupaPasswordKeebs}/>
            <Stack.Screen name='Index' component={Index}/>
            <Stack.Screen name='Product' component={Product}/>
            <Stack.Screen name='DetailProduct' component={DetailProduct}/>
            <Stack.Screen name='Credits' component={Credits}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}