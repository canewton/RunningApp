import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const BeatYourBest = ({ workouts }) => {
  var done = false;
  var best = 10000;
  var counter = 0;
  

    for (var i = 0; i < workouts.length; i++) {
        const time = workouts[i].time_data[workouts[i].time_data.length - 1];
        if (time < best){
            counter += 1;
        }
        if (counter == 3){
            done = true;
        }
    }
    return(
        null
    )
};

const styles = StyleSheet.create({});

export default BeatYourBest;
