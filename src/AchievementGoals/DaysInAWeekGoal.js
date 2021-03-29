import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DaysInAWeekGoals = ({ workouts, amountOfDays }) => {
  const filterWorkoutsByDate = (date) => {
    return workouts.filter((workout) => {
      return (
        workout.date.getDate() === date.getDate() &&
        workout.date.getMonth() === date.getMonth() &&
        workout.date.getYear() === date.getYear()
      );
    });
  };

  return (
    <View>
      <FlatList
        data={filterWorkoutsByDate(new Date("1/1/2021"))}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.date.getMonth() + 1}/{item.date.getDate()}/
              {item.date.getFullYear()}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DaysInAWeekGoals;
