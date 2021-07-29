import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommonCard = (props) => {
  return <View style={styles.card}>{props.content}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    width: "80%",
    minHeight: 80,
    borderColor: "#000",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 70,
    alignItems: "flex-start",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 20 },
    elevation: 10,
    shadowRadius: 2,
    backgroundColor: "#FFFDCE",
  },
});
export default CommonCard;
