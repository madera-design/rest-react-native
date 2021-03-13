import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Rest from '../screens/Rest'


const Stack = createStackNavigator()
export default function RestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "restaurant"
                component = {Rest}
                options = {{title: "Restaurante"}}
            />
        </Stack.Navigator>
    )
}
