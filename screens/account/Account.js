import React from 'react'
import {useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import {getCurrentUser, isUserLogged } from '../../utils/action'
import Loading from '../../components/Loading'

export default function Account() {

    const [Login, setLogin] = useState(null)

    useFocusEffect(
        useCallback(() => {
            const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
        }, [])  
    )
    
   if (Login == null) {
        return <Loading isVisible = {true} text = "Cargando" />
    }
    return Login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
