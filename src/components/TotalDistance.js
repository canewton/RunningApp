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

const TotalDistance = props => {
    const filterWorkoutsByDistance = (distance) => {
        return props.state.filter((workout) => {
          return workout.distance === distance;
        });
      };
    const hundred = filterWorkoutsByDistance("100 meters").length
    const twohundred = filterWorkoutsByDistance("200 meters").length
    const fourhundred = filterWorkoutsByDistance("400 meters").length
    const eighthundred = filterWorkoutsByDistance("800 meters").length
    const sixteenhundred = filterWorkoutsByDistance("1600 meters").length
    const totalDistance = hundred*100+twohundred*200+fourhundred*400+sixteenhundred*1600+eighthundred*800;
    
    return(
        <Text style={props.Style}>
            {totalDistance} meters
        </Text>
    )
 
 
 
};

const styles = StyleSheet.create({
  smallTitle: {
    color: "#12cdd4",
    fontWeight: "bold",
    fontSize: 14,
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    paddingBottom: 5,
    color: "white",
  },
});

export default TotalDistance;
