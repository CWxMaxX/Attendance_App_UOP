import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Header from "../components/Header";
import Person from "../assets/Images/Person.png";

const StudentDetailPage = (props) => {
  return (
    <View style={styles.container}>
      <Header title={"Student Details"} />
      <View style={styles.upperFrame}>
        <View style={styles.imageFrame}>
          <ImageBackground
            source={Person}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            height: "60%",
            justifyContent: "flex-end",
          }}
        >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upperFrame: {
    width: "90%",
    height: "86%",
    // backgroundColor: "#fff",
    alignSelf: "center",
  },
  imageFrame: {
    width: 300,
    height: 300,
    // backgroundColor: "#eee",
    alignSelf: "center",
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
