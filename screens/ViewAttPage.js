import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Card from "../components/Card";
import CommonButton from "../components/CommonButton";
import CommonCard from "../components/CommonCard";

const ViewAttPage = (props) => {
  return (
    <View style={styles.container}>
      <CommonCard
        content={
          <View style={{ width: "100%", paddingVertical: 30 }}>
            <Text>Registration Number</Text>

            <TextInput
              style={styles.textInputBox}
              placeholder={"S16330"}
            ></TextInput>

            <Text>Course Code</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder={"CS304"}
            ></TextInput>
            <CommonButton
              style={styles.buttonAli}
              title={"View"}
              onPress={() => {
                Alert.alert("Still Developing Back-end");
              }}
            ></CommonButton>
          </View>
        }
      ></CommonCard>
    </View>
  );
};

ViewAttPage.navigationOptions = {
  headerTitle: "Attendance",
  headerStyle: {
    backgroundColor: "#DA8E09",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: "#FFF259",
    alignItems: "center",
  },
  textInputBox: {
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: "#fff",
    width: "80%",
    height: 40,
    elevation: 5,
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  buttonAli: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export default ViewAttPage;
