import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../../Component/InputFolder/Input'
const Login = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Welcome}>Login to {"\n"} Happy reads</Text>
            <Input placeholder="Your name " />
            <Input placeholder="Your Email" />
            <Input placeholder="Your Password" />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    Container: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
    Welcome: {
        color: "#f9b84d",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    raw: {
        flexDirection: "row"
    },
    btn: {
        backgroundColor: "#f9b84d",
        padding: 12,
        borderRadius: 20,
        borderColor: "#f1840e",
        borderWidth: 1,
        marginTop: 40
    },
    LoginText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    },
})