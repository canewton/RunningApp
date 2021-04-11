import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

var done = false;
var counter = 0;
var metersCount = 0;

const RunMiles = ({ workouts }) => {
  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].distance === "100 meters") {
      metersCount += 100;
    }
    else if (workouts[i].distance === "200 meters") {
      metersCount += 200;
    }
    else if (workouts[i].distance === "400 meters") {
      metersCount += 400;
    }
    else if (workouts[i].distance === "800 meters") {
      metersCount += 800;
    }
    //console.log(metersCount)
    if (metersCount >= 1609) {
      counter += 1;
      metersCount = (metersCount-1609);
    }

    if (counter >= 3) {
      done = true;
    }
  }
  // console.log(counter)
  // console.log(done)
  return (
    null
)
};

const styles = StyleSheet.create({});

export default RunMiles;
