import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({ placeholder }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={Text}
                placeholder={placeholder}
                label="Name"
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "#d6d6d6",
        borderBottomWidth: 0.5,
        marginTop: 15,
        paddingHorizontal: 10
    },
})