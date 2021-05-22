import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const ViewAttPage = (props) => {
  return (
    <View style={styles.container}>
      <Header title="View Attendance" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ViewAttPage;
