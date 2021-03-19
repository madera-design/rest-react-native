import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Icon } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import Loading from '../../components/Loading'
import { validateEmail } from '../../utils/helper'
import { isEmpty} from 'lodash'
import { loginUser } from '../../utils/action'

export default function LoginForm() {
    const [showPass, setShowPass] = useState(false)
    const [formData, setformData] = useState(defaultFormValues())
    const [errorEmail, seterrorEmail] = useState("")
    const [errorpass, seterrorpass] = useState("")
    const [loading, setloading] = useState(false)

    const navigation = useNavigation()

    const onChange = (e, type) =>{
        setformData({...formData, [type]: e.nativeEvent.text})
        
    }

    const doLogin = async() => {
        if(!validateData()){
            return;
        }
        setloading(true)
        const result = await loginUser(formData.email, formData.pass)
        setloading(false)
        if (!result.statusResponse){
            seterrorEmail(result.error)
            seterrorpass(result.error)
        }
        navigation.navigate("account")

    }

    const validateData = () => {
        seterrorEmail("")
        seterrorpass("")
        let isValid = true

        if(!validateEmail(formData.email)){
            seterrorEmail("Debes de ingresar un email valido")
            isValid = false
        }
        if(isEmpty(formData.pass)){
            seterrorpass("ingresa tu contraseña")
            isValid = false
        }
        return isValid
    }

    return (
        <View style = {styles.container}>
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
                rightIcon = 
                    {
                        <Icon
                            type = "material-community"
                            name = {showPass ? "eye-off-outline" : "eye-outline" }
                            iconStyle = {styles.icon}
                            onPress = {() => setShowPass(!showPass)}
                        />
                    }
            />
                <Button 
                    title = "Iniciar session"
                    containerStyle = {styles.btnContainer}
                    buttonStyle = {styles.btn}
                    onPress={() => doLogin()}
                />
            <Loading isVisible={loading} text="Iniciando Sessión"/>
        </View>
    )
}

const defaultFormValues = () => {
    return {email:"",pass:""}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent :"center",

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
