import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <View style={styles.line}></View>
        <View style={{ marginBottom: 30 }}></View>
        <View
          style={{
            justifyContent: "flex-start",
            width: "99%",
            flexDirection: "row",
          }}
        >
          <FontAwesome name="dot-circle-o" size={10} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>
            {props.discription}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    width: "80%",
    minHeight: 80,
    borderColor: "#000",
    // borderWidth: 1,
    borderRadius: 20,
    padding: 10,

    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 20 },
    elevation: 10,
    shadowRadius: 2,
    backgroundColor: "#FFFDCE",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    position: "absolute",
    top: 5,
    left: 15,
  },
  line: {
    width: "99%",
    height: 2,
    backgroundColor: "#000",
    position: "absolute",
    top: 30,
  },
});

export default Card;
