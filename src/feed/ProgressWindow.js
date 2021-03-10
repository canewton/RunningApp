import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WindowHeader from "../components/WindowHeader";
import { FontAwesome } from "@expo/vector-icons";

//Create a component that gives the user a glimpse of the WorkoutListScreen contents
const ProgressWindow = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <WindowHeader title="Longterm Progress" />
        <FontAwesome name="line-chart" color="white" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
});

export default ProgressWindow;
