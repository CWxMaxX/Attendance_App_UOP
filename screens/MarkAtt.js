import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { color } from "react-native-reanimated";
import CommonButton from "../components/CommonButton";

export default function MarkAtt(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  //req camera permission
  useEffect(() => {
    askForCameraPermission();
  }, []);
  //handling Barcode Scanner
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData:" + data);
  };
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission </Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera </Text>
        <Pressable onPress={() => askForCameraPermission()}>
          <Text>Allow Camera Permission</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
        Scan the QR Code
      </Text>
      <View style={styles.barCodeBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 400 }}
        ></BarCodeScanner>
      </View>

      <Text style={styles.mainText}>{text}</Text>

      {scanned && (
        <View>
          <CommonButton
            title={"Try Again"}
            onPress={() => {
              setText("Scan Again");
              setScanned(false);
            }}
          ></CommonButton>
          <CommonButton
            style={{ marginTop: 20 }}
            title={"Go Back"}
            onPress={() => {
              props.navigation.navigate({ routeName: "Homep" });
              setScanned(false);
            }}
          ></CommonButton>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF259",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  barCodeBox: {
    backgroundColor: "#FFF259",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
  mainText: {
    fontSize: 16,
    margin: 20,
  },
});
