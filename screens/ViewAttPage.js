import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import CommonCard from "../components/CommonCard";

const ViewAttPage = (props) => {
  return (
    <View style={styles.container}>
      <CommonCard
        content={
          <View>
            <Text>Registration Number</Text>
            <Text>Course Code</Text>
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
    backgroundColor: "#FFF259",
    alignItems: "center",
  },
});

export default ViewAttPage;
