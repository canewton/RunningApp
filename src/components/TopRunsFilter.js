import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList";

const TopRunsFilter = (state) => {
 const workouts = Object.values(state)[0];
 const filterWorkoutsByRank = (Rank) => {
    return workouts.filter((workout) => {
      return (
        workout.Rank===(1)
      );
    });
  };
  return (
      <View>
        <WorkoutList
         title="100 meters"
         workouts={filterWorkoutsByRank(
         "100 meters",
         workoutsSortedByDate[dateIndex]
         )}
        />
        <WorkoutList
         title="200 meters"
         workouts={filterWorkoutsRank(
         "200 meters",
         workoutsSortedByDate[dateIndex]
         )}
        />
        <WorkoutList
         title="400 meters"
         workouts={filterWorkoutsByRank(
         "400 meters",
         workoutsSortedByDate[dateIndex]
         )}
        />
        <WorkoutList
         title="800 meters"
         workouts={filterWorkoutsByRank(
         "800 meters",
         workoutsSortedByDate[dateIndex]
         )}
        />
        <WorkoutList
         title="1600 meters"
         workouts={filterWorkoutsByRank(
         "1600 meters",
         workoutsSortedByDate[dateIndex]
         )}
         />
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    fontSize: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconLeft: {
    fontSize: 24,
    color: "black",
  },
  iconRight: {
    fontSize: 24,
    color: "black",
    transform: [{ rotateY: "180deg" }],
  },
  iconButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default TopRunsFilter;