import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../screens/account/Account'
import Login from '../screens/account/Login'
import Registro from '../screens/account/Registro'



const Stack = createStackNavigator()
export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "account"
                component = {Account}
                options = {{title: "Cuenta"}}
            />
            <Stack.Screen
                name = "login"
                component = {Login}
                options = {{title: "Iniciar Sesion"}}
            />
            <Stack.Screen
                name = "registro"
                component = {Registro}
                options = {{title: "Registrar Usuario"}}
            />
        </Stack.Navigator>
    )
}
