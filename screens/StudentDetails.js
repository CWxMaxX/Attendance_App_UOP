import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import Person from "../assets/Images/Person.png";

const StudentDetailPage = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <ImageBackground
            source={Person}
            style={{ width: 180, height: 180 }}
          />
        </View>
        <View style={styles.downContainer}>
          <View style={{ minHeight: 60 }}>
            <Text style={styles.upperText}>Name</Text>
            <View style={styles.line}></View>
            <Text style={styles.lowerText}>Gamage W.S.</Text>
          </View>
          <View style={{ minHeight: 60 }}>
            <Text style={styles.upperText}>Registration Number</Text>
            <View style={styles.line}></View>
            <Text style={styles.lowerText}>S/16/330</Text>
          </View>
          <View style={{ minHeight: 60 }}>
            <Text style={styles.upperText}>Email</Text>
            <View style={styles.line}></View>
            <Text style={styles.lowerText}>s16330.sci.pdn.ac.lk.</Text>
          </View>
          <View style={{ minHeight: 60 }}>
            <Text style={styles.upperText}>Contact Number</Text>
            <View style={styles.line}></View>
            <Text style={styles.lowerText}>+94770000008</Text>
          </View>
          <View style={{ minHeight: 60 }}>
            <Text style={styles.upperText}>Residence</Text>
            <View style={styles.line}></View>
            <Text style={styles.lowerText}>Hilda Hall</Text>
          </View>
          <View style={{ minHeight: 60 }}>
            <Text style={styles.upperText}>Degree Program</Text>
            <View style={styles.line}></View>
            <Text style={styles.lowerText}>Physical Secience</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
StudentDetailPage.navigationOptions = {
  headerTitle: "Account Details",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  upperContainer: {
    alignItems: "center",
    marginTop: 10,

    height: 200,
    width: "90%",
    marginBottom: 5,
  },
  downContainer: {
    marginTop: 0,

    height: "100%",
    width: "90%",
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: "#000",
    alignSelf: "center",
  },
  upperText: {
    marginLeft: 30,
    fontSize: 22,
    color: "#555",
  },
  lowerText: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 15,
  },
});

export default StudentDetailPage;
