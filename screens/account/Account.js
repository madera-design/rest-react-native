import React from 'react'
import {useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import {isUserLogged } from '../../utils/action'
import Loading from '../../components/Loading'

export default function Account() {

    const [Login, setLogin] = useState(null)

    useEffect(() => {
    setLogin(isUserLogged())
    }, [])
   
   if (Login == null) {
        return <Loading isVisible = {true} text = "Cargando" />
    }
    return Login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
