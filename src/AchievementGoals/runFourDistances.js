// import React from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";

var done = false;
var runOneHundred = false;
var runTwoHundred = false;
var runFourHundred = false;
var runEightHundred = false;

const RunFourDistances = ({ workouts }) => {
  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].distance === "400 meters") {
      runFourHundred = true;
    }
    else if (workouts[i].distance === "200 meters") {
        runTwoHundred = true;
    }
    else if (workouts[i].distance === "100 meters") {
        runOneHundred = true;
    }
    else if (workouts[i].distance === "800 meters") {
        runEightHundred = true;
    } 
    
    if (runOneHundred && runTwoHundred && runFourHundred && runEightHundred) {
      done = true;
    }
  }
  console.log (done)
  return(null)
};

const styles = StyleSheet.create({});


export default RunFourDistances;
