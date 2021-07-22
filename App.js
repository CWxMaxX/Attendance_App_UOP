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
import Card from "./components/Card";
import AppNavigation from "./Navigation/AppNavigation";
import LoginPage from "./screens/LoginPage";
import StudentDetailPage from "./screens/StudentDetails";
import HomePage from "./screens/StudentHomePage";
import ViewAttPage from "./screens/ViewAttPage";

export default function App() {
  return (
    // <View style={styles.container}>
    <AppNavigation />
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF259",
  },
});
