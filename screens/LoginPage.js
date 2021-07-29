import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import backgroundImage from "../assets/Images/loginPage.png";

const LoginPage = (props) => {
  const [name, setName] = useState("CWx");
  const [password, setPassword] = useState("");
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
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            textContentType="username"
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }}>
            Forgot Password
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (name == "S16330" && password == "123456") {
                props.navigation.replace({ routeName: "Homep" });
              } else {
                Alert.alert("Worng Credintionals");
                console.log("Worng Credintionals");
              }
              // props.navigation.replace({ routeName: "Homep" });
              // console.log();
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.cardText}></Text>
        </View>
      </ImageBackground>
    </View>
  );
};

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

export default LoginPage;
