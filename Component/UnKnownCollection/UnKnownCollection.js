import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

const Data = [
    { Image: require("./UnKnownCollectionImages/one.png"), id: "1" },
    { Image: require("./UnKnownCollectionImages/two.png"), id: "2" },
    { Image: require("./UnKnownCollectionImages/three.png"), id: "3" },
    { Image: require("./UnKnownCollectionImages/four.png"), id: "4" },
    { Image: require("./UnKnownCollectionImages/five.png"), id: "5" },
]

const UnKnownCollection = ({ RecommendedProps }) => {
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

export default UnKnownCollection

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
        marginVertical: 10,
        paddingVertical: 3,
        backgroundColor: "#fef1df",
        paddingLeft: 5
    },
    RecBooksRaw: {

    }
})