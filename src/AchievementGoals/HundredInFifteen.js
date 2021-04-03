import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const HundredInFifteen = ({ workouts }) => {
  var done = false;
   
  
    for (var i = 0; i < workouts.length; i++) {
        const time = workouts[i].time_data[workouts[i].time_data.length - 1];
        if((workouts[i].distance === "100 meters") && (time <= 15)){
            done = true;
        }
    }
    console.log(done);
};

const styles = StyleSheet.create({});

export default HundredInFifteen;