import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

var done = false;
var runonehundred = false;
var runtwohundred = false;
var runfourhundred = false;
var runeighthundred = false;

const RunFourDistances = ({ workouts }) => {
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
  console.log (done)
};

const styles = StyleSheet.create({});


export default RunFourDistances;
