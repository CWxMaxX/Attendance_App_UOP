import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";

const HomePage = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFF259",
  },
});
export default HomePage;
