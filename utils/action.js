import {app} from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { fileBlod } from './helper'

const db = firebase.firestore(app)

export const isUserLogged = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}
export const sessionClose = () => {
    return firebase.auth().signOut()
}

export const registro = async (email, pass) => {
    const result = {statusResponse: true, error: null}
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, pass)
        
    } catch (error) {
        result.statusResponse = false
        result.error = "Este correo ya ha sido registrado"
        
    }

    return result
}

export const loginUser = async (email, pass) => {
    const result = {statusResponse: true, error: null}
    try {
        await firebase.auth().signInWithEmailAndPassword(email, pass)
        
    } catch (error) {
        result.statusResponse = false
        result.error = "Usuario o contraseña no validos"
        
    }
    return result
}

export const uploadImage = async(image, path, nombre) => {
    const result = {statusResponse: false, error: null, url: null}
    const ref = firebase.storage().ref(path).child(nombre)
    const blod = await fileBlod(image)
    try {
        await ref.put(blod)
        const url = await firebase.storage().ref(`${path}/${nombre}`).getDownloadURL()
        result.statusResponse= true
        result.url = url
        
    } catch (error) {
       result.error = error 
    }
    return result
}