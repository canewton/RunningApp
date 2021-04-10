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

const TotalDistance = ({ state }) => {
 return (
    <View>
      <Text style={styles.smallTitle}>
        3240 m
      </Text>
   
  </View>
 )
 
 
};

const styles = StyleSheet.create({
  smallTitle: {
    color: "#12cdd4",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default TotalDistance;
