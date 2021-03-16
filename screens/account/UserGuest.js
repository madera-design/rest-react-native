import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'


export default function UserGuest() {
    const navigation = useNavigation()
    return (
        <ScrollView
            centerContent
            style = {styles.viewBody}
        >
            <Image
            source = {require("../../assets/restaurant_logo.png")}
            resizeMode = "contain"
            style = {styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaunarts</Text>
            <Text style={styles.descp}>
                ¿Cómo descibirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado mas y comenta como ha sido tu experiencia.
            </Text>
            <Button
                buttonStyle ={styles.button}
                title = "Ver tu perfil"
                onPress = {() => navigation.navigate("login")}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    descp: {
        marginBottom: 20,
        textAlign: "justify",
        color: "#70579f",
        fontSize: 15
    },
    button:{
        backgroundColor: "#9d3a93"

    }
})
