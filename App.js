import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import backgroundImage from "./assets/Images/loginPage.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImageStyle}
      >
        <View style={styles.loginCard}>
          <Text
            style={
              (styles.cardText,
              { fontSize: 50, marginBottom: 70, color: "#000" })
            }
          >
            Sign In
          </Text>
          <TextInput style={styles.inputStyle} placeholder="Username" />
          <TextInput style={styles.inputStyle} placeholder="Password" />
          <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }}>
            Forgot Password
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.cardText}></Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF259",
  },
  loginCard: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FEF7A7",
    width: "80%",
    height: 550,
    marginTop: 90,
  },
  backgroundImageStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 60,
  },
  cardText: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 100,
  },
  inputStyle: {
    width: "80%",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
    marginTop: 15,
    fontSize: 18,
    height: 45,
  },
  button: {
    width: "50%",
    backgroundColor: "#FFF259",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    borderRadius: 20,
  },
});
