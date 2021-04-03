import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const done = false;
const counter = 0;
const runFourDistances = ({ workouts }) => {
  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].getdistance === "1609 meters") {
      counter += 1;
    }

    if (counter >= 3) {
      done = true;
    }
  }

  return (
    <View>
      <Text> {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DaysInAWeekGoals;

// Do we use distance_Data and what is that? 
// How do we display these and how do we check it? is it a console.log? 
// 