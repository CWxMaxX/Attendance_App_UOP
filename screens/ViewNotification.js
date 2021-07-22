import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";

const SettingsPage = (props) => {
  return (
    <View style={styles.container}>
      <Card
        title={"Notification Title"}
        discription={"Sample Notification Description "}
      ></Card>
    </View>
  );
};

SettingsPage.navigationOptions = {
  headerTitle: "Notifications",
  headerStyle: {
    backgroundColor: "#DA8E09",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF259",
  },
});
export default SettingsPage;
