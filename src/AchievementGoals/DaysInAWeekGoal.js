import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DaysInAWeekGoal = ({ workouts }) => {
  var done = false;
  var counter = 0;
  var tempWeek = [];
  var comparingDate = 0;

  
    for (var i = 0; i < workouts.length; i++) {
      var date = workouts[i].date
      var day = date.getDay()
      comparingDate = day+7;
      if (day = comparingDate){
        counter = 0;
        comparingDate = day;
      }
      else{
        counter += 1;
        if(counter == 4){
          done = true;
        }
      }
    }
    return (
        null
    )
};


const styles = StyleSheet.create({});

export default DaysInAWeekGoal;

