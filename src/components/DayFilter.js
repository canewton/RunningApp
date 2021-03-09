import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList";

const DayFilter = (state) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  //get today's date
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var weekday = date.getDay();

  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
//important!!!!!!!!! 
//array of each workout
  const workouts = Object.values(state)[0];
  const mostRecentWorkout = workouts[workouts.length - 1];
  const mostRecentWorkoutDate = mostRecentWorkout.date;

  const filterWorkoutsByDate = (date) => {
    return workouts.filter((workout) => {
      return (
        workout.date.getDate() === date.getDate() &&
        workout.date.getMonth() === date.getMonth() &&
        workout.date.getYear() === date.getYear()
      );
    });
  };

  const groupWorkoutsByDate = (workouts) => {
    //duplicate the array
    const remainingWorkouts = [...workouts];
    const newWorkoutsArray = [];
    while (remainingWorkouts.length > 0) {
      newWorkoutsArray.push(filterWorkoutsByDate(remainingWorkouts[0].date));
      remainingWorkouts.splice(
        0,
        newWorkoutsArray[newWorkoutsArray.length - 1].length
      );
    }
    return newWorkoutsArray;
  };

  const filterWorkoutsByDistanceAndDate = (distance, dateCollection) => {
    return dateCollection.filter((workout) => {
      return workout.distance === distance;
    });
  };

  const workoutsSortedByDate = groupWorkoutsByDate(workouts);

  const [dateDisplayed, setDateDisplayed] = useState(mostRecentWorkoutDate);
  const [dateIndex, setDateIndex] = useState(workoutsSortedByDate.length - 1);

  function updateDateDisplayed(change) {
    if (change === "increase" && dateIndex + 1 < workoutsSortedByDate.length) {
      setDateDisplayed(workoutsSortedByDate[dateIndex + 1][0].date);
      setDateIndex(dateIndex + 1);
    } else if (change === "decrease" && dateIndex - 1 >= 0) {
      setDateDisplayed(workoutsSortedByDate[dateIndex - 1][0].date);
      setDateIndex(dateIndex - 1);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => updateDateDisplayed("decrease")}>
          <View style={styles.iconButton}>
            <Ionicons name="chevron-back" style={styles.iconLeft} />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>
          {months[dateDisplayed.getMonth()]} {dateDisplayed.getDate()},{" "}
          {dateDisplayed.getFullYear()}
        </Text>
        <TouchableOpacity onPress={() => updateDateDisplayed("increase")}>
          <View style={styles.iconButton}>
            <Ionicons name="chevron-back" style={styles.iconRight} />
          </View>
        </TouchableOpacity>
      </View>
      <WorkoutList
        title="100 meters"
        workouts={filterWorkoutsByDistanceAndDate(
          "100 meters",
          workoutsSortedByDate[dateIndex]
        )}
      />
      <WorkoutList
        title="200 meters"
        workouts={filterWorkoutsByDistanceAndDate(
          "200 meters",
          workoutsSortedByDate[dateIndex]
        )}
      />
      <WorkoutList
        title="400 meters"
        workouts={filterWorkoutsByDistanceAndDate(
          "400 meters",
          workoutsSortedByDate[dateIndex]
        )}
      />
      <WorkoutList
        title="800 meters"
        workouts={filterWorkoutsByDistanceAndDate(
          "800 meters",
          workoutsSortedByDate[dateIndex]
        )}
      />
      <WorkoutList
        title="1600 meters"
        workouts={filterWorkoutsByDistanceAndDate(
          "1600 meters",
          workoutsSortedByDate[dateIndex]
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    fontSize: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconLeft: {
    fontSize: 24,
    color: "black",
  },
  iconRight: {
    fontSize: 24,
    color: "black",
    transform: [{ rotateY: "180deg" }],
  },
  iconButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default DayFilter;
