import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const done = false;
const runonehundred = false
const runtwohundred = false
const runfourhundred = false
const runeighthundred = false

const runFourDistances = ({ workouts }) => {
  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].getdistance === "400 meters") {
      runfourhundred = true;
    }
    if (workouts[i].getdistance === "200 meters") {
        runtwohundred = true;
      }
    if (workouts[i].getdistance === "100 meters") {
        runonehundred = true;
      }
      if (workouts[i].getdistance === "800 meters") {
        runeighthundred = true;
      } 
    
    if (runonehundred && runtwohundred && runfourhundred && runeighthundred) {
      done = true;
    }
  }

    return (
    <View>
        <Text>  </Text>
    </View>
    )
};

const styles = StyleSheet.create({});


export default DaysInAWeekGoals;
