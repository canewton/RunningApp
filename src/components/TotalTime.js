import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList";
import WorkoutListScreen from "../screens/WorkoutListScreen";
import { Context as WorkoutContext } from "../context/WorkoutContext";
const TotalTime = (props) => {
  var totalTime = 0;
  for (var i = 0; i < props.state.length; i++) {
    totalTime = totalTime + props.state[i].time_data[7];
  }
  //console.log(props.state)
  //console.log(totalTime)

  return <Text style={props.style}>{totalTime} seconds</Text>;
};

const styles = StyleSheet.create({
  smallTitle: {
    color: "#12cdd4",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default TotalTime;
