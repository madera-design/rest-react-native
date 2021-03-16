import React from 'react'
import { Image } from 'react-native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'


export default function Login() {
    return (
        <ScrollView>
            <Image
                source={require("../../assets/restaurant_logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
         <View style={styles.container}>
            <Text>Login Form</Text>
            <CreateAccount/>
        </View> 
        <Divider style={styles.divider} />
        </ScrollView>
        
    )
}

function CreateAccount(props){
    const navigation = useNavigation()
    return(
        <Text 
            style={styles.desp}
            onPress = {() => navigation.navigate("registro")}
        >
            ¿Aún no tienes cuenta?
            <Text style={styles.registro}>Registrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
        marginBottom: 20
    },
    container: {
        marginHorizontal: 40
    },
    divider: {
        backgroundColor: "#9d3a93",
        margin: 40
    },
    desp: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    registro: {
        color: "#9d3a93",
        fontWeight: "bold"
    }
})
