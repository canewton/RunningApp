import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
//import fontelloConfig from "../config.json";
//import fontelloConfig from "../resources/fonts/fontelloConfig/config.json";
import { FontAwesome } from "@expo/vector-icons";

//const Icon = createIconSetFromFontello(fontelloConfig);

const ConnectButton = () => {
  return (
    <View style={styles.margin}>
      <View style={styles.circle}>
        <FontAwesome name="bluetooth-b" color="#8fd14f" size={70} />
        <Text style={styles.text}>Connect</Text>
      </View>
    </View>
  );
};

const circleDiameter = 200;

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 18,
    color: "#8fd14f",
    fontWeight: "bold",
  },
  margin: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: "center",
  },
  circle: {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleDiameter / 2,
    borderWidth: 10,
    borderColor: "#8fd14f",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConnectButton;
