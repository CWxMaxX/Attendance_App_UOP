import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Person from "../assets/Images/Person.png";

const HomePage = (props) => {
  console.log(props);

  return (
    <View style={styles.container}>
      {/* Photo with full name */}
      <View style={styles.upperFrame}>
        <View style={styles.imageFrame}>
          <ImageBackground
            source={Person}
            style={{ width: 180, height: 180 }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "700" }}>
            Sanushi Gamage
          </Text>
          <Text style={{ fontSize: 20 }}>S/16/330</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          props.navigation.navigate({ routeName: "Attendance" });
        }}
      >
        <Card
          title={"View Attendance"}
          discription={"Check your Attendance for each courses"}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          props.navigation.navigate({ routeName: "Notifications" });
        }}
      >
        <Card
          title={"View Notifications"}
          discription={
            "Check your Notifications about academic notifications and exam notifications"
          }
        />
      </Pressable>
      <Pressable
        onPress={() => {
          props.navigation.navigate({ routeName: "StudentDetails" });
        }}
      >
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

HomePage.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <View>
        <Pressable
          style={{ paddingRight: 10 }}
          onPress={() => {
            navigation.navigate({ routeName: "MarkAttp" });
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Mark Attendance</Text>
        </Pressable>
      </View>
    ),
  };
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
    marginTop: 10,
    // backgroundColor: "#fff",
    alignSelf: "center",
  },
  imageFrame: {
    width: "70%",
    height: "70%",
    // backgroundColor: "#eee",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomePage;
