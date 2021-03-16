import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { ScrollView,Image } from 'react-native'

export default function RegistroForm() {
    return (
        <ScrollView>
            <Image
                source={require("../assets/restaurant_logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style = {styles.form}>
                <Input
                    containerStyle={styles.input}
                    placeholder = "Ingresa tu email"
                />
                <Input
                            containerStyle={styles.input}
                            placeholder = "Ingresa tu contraseña..."
                            password={true}
                            secureTextEntry={true}
                        />
                <Input
                            containerStyle={styles.input}
                            placeholder = "Confirma tu contraseña"
                            password={true}
                            secureTextEntry={true}
                        />
                        <Button 
                            title = "Registrar nuevo usuario"
                            containerStyle = {styles.btnContainer}
                            buttonStyle = {styles.btn}
                        />
                        
                    </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
    },
    form: {
        marginTop: 30
    },
    input: {
        width: "100%"

    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#9d3a93"
    }
})
