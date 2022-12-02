import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Data = [
    { Image: require("./MenuImages/comics.png") },
    { Image: require("./MenuImages/novel.png") },
    { Image: require("./MenuImages/Books1.png") },
    { Image: require("./MenuImages/books2.png") },
    { Image: require("./MenuImages/Books3.png") },
    { Image: require("./MenuImages/Books4.png") },
    { Image: require("./MenuImages/Books5.png") },
]

const menu = () => {
    return (
        // <ScrollView horizontal={true}>
        <View style={styles.raw}>
            <TouchableOpacity>
                <Image
                    source={require("./MenuImages/comics.png")}
                    style={styles.tinyLogo} />
                <Text style={styles.Ptext}>Comics</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require("./MenuImages/novel.png")}
                    style={styles.tinyLogo} />
                <Text style={styles.Ptext}>Novel</Text></TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require("./MenuImages/Books1.png")}
                    style={styles.tinyLogo} />
                <Text style={styles.Ptext}>frictional</Text></TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require("./MenuImages/books2.png")}
                    style={styles.tinyLogo} />
                <Text style={styles.Ptext}>Non-Frict</Text></TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require("./MenuImages/Books3.png")}
                    style={styles.tinyLogo} />
                <Text style={styles.Ptext}>Random</Text>
            </TouchableOpacity>
        </View>
        // </ScrollView>
    )
}

export default menu

const styles = StyleSheet.create({
    raw: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#d4fded",
        marginTop: 10,
        paddingVertical: 10
    },
    tinyLogo: {
        width: 40,
        height: 40
    },
    Ptext: {
        fontSize: 10,
        color: "#000",
        marginTop: 2,
        marginLeft: 3
    }
})