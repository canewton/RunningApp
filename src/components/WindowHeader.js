import React from "react";
import { View, Text, StyleSheet } from "react-native";

//make a component that formats the header of every window in the feed folder
const WindowHeader = ({ title }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  headerText: {
    marginLeft: 10,
    fontWeight: "400",
    color: "white",
    fontSize: 20,
  },
});

export default WindowHeader;
