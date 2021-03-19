import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { laodImage } from '../../utils/helper'

export default function InfoUser({user}) {
    const changePhoto = async() => {
        const result = await laodImage([1, 1])
    }
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size = "large"
                onPress = {changePhoto}
                source = 
                    {
                        user.photoURL ? { url: photoURL} : require("../../assets/user-default.png")
                    }
            />
            <View style = {styles.infoUse}>
                <Text style= {styles.displayName}>
                    {
                        user.displayName ? user.displayName : "Anonimo"
                    }
                </Text>
                <Text>
                    {user.email}
                </Text>
            
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30
    },
    infoUse: {
        marginLeft: 20
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5
    }
})
