import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={{ position: "absolute", left: 10, bottom: 5 }}>
        <Entypo name="menu" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "absolute", right: 10, bottom: 5 }}>
        <Entypo name="home" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#DA8E09",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 5,
    flexDirection: "row",
  },
  headerTitle: {
    color: "black",
    fontSize: 28,
  },
});

export default Header;
