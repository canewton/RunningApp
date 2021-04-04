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

const TopRunsFilter = ({ state }) => {
  const filterWorkoutsByRank = (rank) => {
    return state.filter((workout) => {
      return workout.rank === rank;
    });
  };
  console.log(filterWorkoutsByRank(1));
  return (
    <View>
      <FlatList
        data={filterWorkoutsByRank(1)}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return <Text>{item.distance}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TopRunsFilter;
