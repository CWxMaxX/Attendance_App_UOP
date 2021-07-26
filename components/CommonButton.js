import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const CommonButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.button, ...props.style }}
        onPress={props.onPress}
      >
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    height: 50,
    backgroundColor: "#DA8E09",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 8,
  },
});
export default CommonButton;
