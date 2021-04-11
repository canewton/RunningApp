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
      }
      else{
        counter += 1;

        if(counter==1){
          comparingDate = day;
        }
        if(counter == 4){
          done = true;
        }
      }
    }
    return (
        null
    )
};

//add days to array loop through array erase everything before that index and set that index to 0 idrk how to do that also months 

// OR sense first context date and last context date and divide into sevens reset counter for each week and if conter = 4 (YA THIS ONE)

const styles = StyleSheet.create({});

export default DaysInAWeekGoal;

