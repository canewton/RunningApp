import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ConnectIcon from "../icons/ConnectIcon";

const ConnectButton = () => {
  return (
    <View style={styles.margin}>
      <View style={styles.circle}>
        <ConnectIcon />
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
