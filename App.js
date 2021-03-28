import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import * as firebase from "firebase";
// var firebaseConfig = {
//   apiKey: "AIzaSyAtWWg95VPkrUuH7FSzlirildOd4QI5p4Q",
//   authDomain: "attendanceapp-9be34.firebaseapp.com",
//   projectId: "attendanceapp-9be34",
//   storageBucket: "attendanceapp-9be34.appspot.com",
//   messagingSenderId: "932726945174",
//   appId: "1:932726945174:web:0aa7c57cbaf6fb32ac59b7",
//   measurementId: "G-2T1VSM5DSH",
// };

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Attendance App CWx</Text>
      <TextInput
        placeholder="Username"
        style={{
          borderBottomColor: "#DA8E09",
          borderBottomWidth: 2,
          marginTop: 150,
          marginBottom: 15,
        }}
      />
      <TextInput
        placeholder="Password"
        style={{
          borderBottomColor: "#DA8E09",
          borderBottomWidth: 2,
          marginBottom: 15,
        }}
      />
      <Button title="Sign in" color="#DA8E09" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff259",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
