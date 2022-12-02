import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import Recommended from "../../Component/RecommendedBooks/Recommended"
import UnKnownCollection from '../../Component/UnKnownCollection/UnKnownCollection'
import YourCollection from '../../Component/YourCollection/YourCollection'
import Menu from '../../Component/MainMenu/menu'

const HomeScreen = () => {
    return (
        <View style={styles.Contianer}>
            <View style={styles.goodDay}>
                <Text style={styles.goodDayText}>Good day </Text>
                <Text style={styles.goodDayText}>Amily!</Text>
            </View>
            <View>
                <Recommended RecommendedProps="Recommended For you" />
                <YourCollection RecommendedProps="your Collection" />
                <UnKnownCollection RecommendedProps="UnKnown Collection" />
                <Menu />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Contianer: {
        marginVertical: 20,
        marginHorizontal: 10
    },
    goodDayText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#000"
    }
})