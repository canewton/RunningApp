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
  const topRun = filterWorkoutsByRank(1);
  const filterWorkoutsByDistance = (distance) => {
    return topRun.filter((topRun) => {
      return topRun.distance === distance;
    });
  };
  const filterWorkoutsByDate = (date) => {
    return state.filter((workout) => {
      return workout.date === date;
    });
  };
  //console.log(filterWorkoutsByRank(1));
  return (
    <View>
      <FlatList
        data={filterWorkoutsByDistance("100 meters")}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.smallTitle}>
                {item.distance}: {item.time}
              </Text>
              <Text style={styles.smallTitle}>
                {item.date.getMonth() + 1}/{item.date.getDate()}/
                {item.date.getFullYear()}
              </Text>
            </View>
          );
        }}
      />
      <FlatList
        data={filterWorkoutsByDistance("200 meters")}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.smallTitle}>
                {item.distance}: {item.time}
              </Text>
              <Text style={styles.smallTitle}>
                {item.date.getMonth() + 1}/{item.date.getDate()}/
                {item.date.getFullYear()}
              </Text>
            </View>
          );
        }}
      />
      <FlatList
        data={filterWorkoutsByDistance("400 meters")}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.smallTitle}>
                {item.distance}: {item.time}
              </Text>
              <Text style={styles.smallTitle}>
                {item.date.getMonth() + 1}/{item.date.getDate()}/
                {item.date.getFullYear()}
              </Text>
            </View>
          );
        }}
      />
      <FlatList
        data={filterWorkoutsByDistance("800 meters")}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.smallTitle}>
                {item.distance}: {item.time}
              </Text>
              <Text style={styles.smallTitle}>
                {item.date.getMonth() + 1}/{item.date.getDate()}/
                {item.date.getFullYear()}
              </Text>
            </View>
          );
        }}
      />
      <FlatList
        data={filterWorkoutsByDistance("1600 meters")}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.smallTitle}>
                {item.distance}: {item.time}
              </Text>
              <Text style={styles.smallTitle}>
                {item.date.getMonth() + 1}/{item.date.getDate()}/
                {item.date.getFullYear()}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smallTitle: {
    color: "#12cdd4",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default TopRunsFilter;
