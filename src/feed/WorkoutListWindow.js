import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WindowHeader from "../components/WindowHeader";
import { FontAwesome5 } from "@expo/vector-icons";

//Create a component that gives the user a glimpse of the WorkoutListScreen contents
const WorkoutListWindow = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <WindowHeader title="Recent Runs" />
        <FontAwesome5 name="running" size={30} color="white" />
      </View>
      <Text style={styles.text}>100m: 00:09.21</Text>
      <Text style={styles.text}>200m: 00:20.63</Text>
      <Text style={styles.text}>400m: 00:50.89</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 15,
    paddingBottom: 5,
    color: "white",
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
});

export default WorkoutListWindow;
