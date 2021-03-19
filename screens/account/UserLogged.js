import React, {useState, useRef, useEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { getCurrentUser, sessionClose } from '../../utils/action'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import InfoUser from './InfoUser'


export default function UserLogged() {
    const toastRef = useRef()
    const navigation = useNavigation()

    const [loading, setLoading] = useState(null)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(getCurrentUser())
    }, [])

    return (
        <View style={styles.container}>
            {
                user && <InfoUser user = {user}/>
            }
           
            <Text>Account Options...</Text>
            <Button
                title = "Cerrar Sesión"
                buttonStyle = {styles.btn}
                titleStyle = {styles.btntext}
                onPress = { () => {
                    sessionClose()
                    navigation.navigate("restaurant")
                }}
            />
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <Loading isVisible={loading} text={loadingText}/>
        </View>
    )
}
    


const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        backgroundColor: "#f9f9f9"
    },
    btn: {
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderTopColor: "#9d3a93",
        borderBottomWidth: 1,
        borderBottomColor: "#9d3a93",
        paddingVertical: 10
    },
    btntext: {
        color: "#9d3a93"
    }
})

