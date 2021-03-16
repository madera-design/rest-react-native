import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'


import RestStack from './RestStack'
import FavoriteStack from './FavoriteStack'
import TopRestStack from './TopRestStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    const scrreOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restaurant":
                iconName = "compass-outline"
                break;
            case "favorite":
                iconName = "heart-outline"
                break;
            case "top":
                iconName = "star-outline"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "account":
                iconName = "home-outline"
                break;
        }

        return (

            <Icon
                type = "material-community"
                name = {iconName}
                size = {22}
                color = {color}
            />
        )
    }



    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "restaurant"
                tabBarOptions = {{
                    inactiveTintColor: "#cc91c4",
                    activeTintColor: "#9d3a93"
                }}
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ color }) => scrreOptions(route, color)
                })}
            >
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
                    name = "account"
                    component = {AccountStack}
                    options = {{ title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
