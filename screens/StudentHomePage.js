import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import Person from "../assets/Images/Person.png";

const HomePage = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      {/* Photo with full name */}
      <View style={styles.upperFrame}>
        <View style={styles.imageFrame}>
          <ImageBackground
            source={Person}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "700" }}>
            Sanushi Gamage
          </Text>
          <Text style={{ fontSize: 20 }}>S/16/330</Text>
        </View>
      </View>
      <Pressable>
        <Card title={"View Attendance"} discription={"Check your Attendance"} />
      </Pressable>
      <Pressable>
        <Card
          title={"View Notifications"}
          discription={
            "Check your Notifications about academic notifications and exam notifications"
          }
        />
      </Pressable>
      <Pressable>
        <Card
          title={"View Account Details"}
          discription={
            "Check your account details and achived grades for past exams"
          }
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF259",
  },
  upperFrame: {
    width: "90%",
    height: "40%",
    marginTop: 20,
    // backgroundColor: "#fff",
    alignSelf: "center",
  },
  imageFrame: {
    width: "70%",
    height: "80%",
    // backgroundColor: "#eee",
    alignSelf: "center",
  },
});
export default HomePage;
