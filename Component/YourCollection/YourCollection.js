import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

const Data = [
    { Image: require("./YourCollectionBooksImage/One.png"), id: "1" },
    { Image: require("./YourCollectionBooksImage/two.png"), id: "2" },
    { Image: require("./YourCollectionBooksImage/three.png"), id: "3" },
    { Image: require("./YourCollectionBooksImage/four.png"), id: "4" },
    { Image: require("./YourCollectionBooksImage/five.png"), id: "5" },
]

const YourCollection = ({ RecommendedProps }) => {
    return (
        <View style={styles.Recommended}>
            <Text style={styles.RecText}>{RecommendedProps}</Text>

            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={(element) => {
                    return (
                        <View style={styles.RecBooksRaw}>

                            <Image style={styles.tinyLogo}
                                source={element.item.Image} />
                        </View>
                    )
                }}

            />
        </View>
    )
}

export default YourCollection

const styles = StyleSheet.create({
    tinyLogo: {
        width: 74,
        height: 124,
        marginHorizontal: 5,
        borderRadius: 10,
        marginVertical: 2
    },
    RecText: {
        color: "#fb9004",
        fontSize: 20,
        marginVertical: 10, paddingVertical: 3,
        backgroundColor: "#fef1df",
        paddingLeft: 5
    },
    RecBooksRaw: {

    }
})