import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import RestStack from './RestStack'
import FavoriteStack from './FavoriteStack'
import TopRestStack from './TopRestStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name = "restaurant"
                    component = {RestStack}
                    options = {{ title: "Restaurante"}}
                />
                <Tab.Screen 
                    name = "favorite"
                    component = {FavoriteStack}
                    options = {{ title: "Favoritos"}}
                />
                <Tab.Screen 
                    name = "top"
                    component = {TopRestStack}
                    options = {{ title: "top 5"}}
                />
                <Tab.Screen 
                    name = "search"
                    component = {SearchStack}
                    options = {{ title: "Buscar"}}
                />
                <Tab.Screen 
                    name = "acccount"
                    component = {AccountStack}
                    options = {{ title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
