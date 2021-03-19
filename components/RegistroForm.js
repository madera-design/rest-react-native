import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { ScrollView,Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { validateEmail } from '../utils/helper'
import { size } from 'lodash'
import {useNavigation} from '@react-navigation/native'
import {registro} from '../utils/action'
import Loading from './Loading'




export default function RegistroForm() {
    const [showPass, setShowPass] = useState(false)
    const [formData, setformData] = useState(defaultFormValues())
    const [errorEmail, seterrorEmail] = useState("")
    const [errorpass, seterrorpass] = useState("")
    const [errorconfirmpass, seterrorconfirmpass] = useState("")
    const [loading, setloading] = useState(false)

    const navigation = useNavigation()

    const onChange = (e, type) =>{
        setformData({...formData, [type]: e.nativeEvent.text})
        
    }
    const registerUser = async() => {
        if(!validateData()){
            return;
        }

        setloading(true)
        const result = await registro(formData.email, formData.pass)
        setloading(false)

        if (!result.statusResponse){
            seterrorEmail(result.error)
        }
        navigation.navigate("account")

    }
    const validateData = () => {
        seterrorconfirmpass("")
        seterrorEmail("")
        seterrorpass("")
        let isValid = true

        if(!validateEmail(formData.email)){
            seterrorEmail("Debes de ingresar un email valido")
            isValid = false
        }
        if(size(formData.pass) < 6){
            seterrorpass("Ingresa una contraseña con mas de seis caracteres")
            isValid = false
        }
        if(size(formData.confirmPass) < 6){
            seterrorconfirmpass("Ingresa una  confirmación contraseña con mas de seis caracteres")
            isValid = false
        }
        if(formData.confirmPass !== formData.pass){
            seterrorconfirmpass("Las contraseñas no son iguales")
            seterrorpass("Las contraseñas no son iguales")
            isValid = false
        }
        return isValid
    }
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
                    onChange = {(e) => onChange(e, "email")}
                    keyboardType="email-address"
                    errorMessage={errorEmail}
                    defaultValue={formData.email}
                />
                <Input
                            containerStyle={styles.input}
                            placeholder = "Ingresa tu contraseña"
                            password={true}
                            secureTextEntry={!showPass}
                            onChange = {(e) => onChange(e, "pass")}
                            errorMessage={errorpass}
                            defaultValue={formData.pass}
                            rightIcon = {
                                <Icon
                                    type = "material-community"
                                    name = {showPass ? "eye-off-outline" : "eye-outline" }
                                    iconStyle = {styles.icon}
                                    onPress = {() => setShowPass(!showPass)}
                                />
                            }
                        />
                <Input
                            containerStyle={styles.input}
                            placeholder = "Confirma tu contraseña"
                            password={true}
                            secureTextEntry={!showPass}
                            onChange = {(e) => onChange(e, "confirmPass")}
                            errorMessage={errorconfirmpass}
                            defaultValue={formData.confirmPass}
                            rightIcon = {
                                <Icon
                                    type = "material-community"
                                    name = {showPass ? "eye-off-outline" : "eye-outline" }
                                    iconStyle = {styles.icon}
                                    onPress = {() => setShowPass(!showPass)}
                                />
                            }
                        />
                        <Button 
                            title = "Registrar nuevo usuario"
                            containerStyle = {styles.btnContainer}
                            buttonStyle = {styles.btn}
                            onPress={() => registerUser()}
                        />
                        <Loading isVisible={loading} text="Creando cuenta"/>
                    </View>
        </ScrollView>
        
    )
}
const defaultFormValues = () => {
    return {email:"",pass:"",confirmPass:""}
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
    },
    icon: {
        color: "#c1c1c1"
    }
})
