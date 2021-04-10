import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList";

const TotalTime = ({ state }) => {
    return(
        <Text style={styles.smallTitle}>
            3 hrs 42 min 25 sec
        </Text>
    )
 
  
};

const styles = StyleSheet.create({
  smallTitle: {
    color: "#12cdd4",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default TotalTime;
