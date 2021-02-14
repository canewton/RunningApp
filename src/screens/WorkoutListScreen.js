import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import WorkoutList from "../components/WorkoutList";
import { ScrollView } from "react-native-gesture-handler";

const WorkoutListScreen = ({ navigation }) => {
  const { state, addWorkout } = useContext(WorkoutContext);

  const filterWorkoutsByDistance = (distance) => {
    return state.filter((workout) => {
      return workout.distance === distance;
    });
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WorkoutList
          title="100 meters"
          children={filterWorkoutsByDistance("100 meters")}
        />
        <WorkoutList
          title="200 meters"
          children={filterWorkoutsByDistance("200 meters")}
        />
        <WorkoutList
          title="400 meters"
          children={filterWorkoutsByDistance("400 meters")}
        />
        <WorkoutList
          title="800 meters"
          children={filterWorkoutsByDistance("800 meters")}
        />
        <WorkoutList
          title="1600 meters"
          children={filterWorkoutsByDistance("1600 meters")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WorkoutListScreen;
