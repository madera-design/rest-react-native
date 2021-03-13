import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRest from '../screens/TopRest'



const Stack = createStackNavigator()
export default function TopRestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "toprest"
                component = {TopRest}
                options = {{title: "Los Mejores Restaurantes"}}
            />
        </Stack.Navigator>
    )
}
