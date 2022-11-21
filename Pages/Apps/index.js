import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Product from './Product'
import Akun from './Akun'
import Credits from './Credits'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab=createBottomTabNavigator();
function BottomTabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Product' component={Product} options={{
                tabBarIcon:({size, focused, color})=>{
                    return(
                        <Image
                        style={{width:size, height:size}}
                        source={require('../../assets/messenger 5.png')}
                        />
                    )
                }
            }}/>
            <Tab.Screen name='Akun' component={Akun} options={{
                tabBarIcon:({size, focused, color})=>{
                    return(
                        <Image
                        style={{width:size, height:size}}
                        source={require('../../assets/user 2.png')}
                        />
                    )
                }
                }}/>
            <Tab.Screen name='Credits' component={Credits} options={{
                tabBarIcon:({size, focused, color})=>{
                    return(
                        <Image
                        style={{width:size, height:size}}
                        source={require('../../assets/user 3.png')}
                        />
                    )
                }
                }}/>
        </Tab.Navigator>
    )
}

export default function Index (){
        return (
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        )
}