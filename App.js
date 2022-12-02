import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from "./Screens/Login/Login"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"

const App = () => {
  return (
    <View style={styles.raw}>
      <Login />
      {/* <HomeScreen /> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  raw: {
    backgroundColor: "#fef3e3",
  }
})