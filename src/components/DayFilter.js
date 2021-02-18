import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList";

const DayFilter = (state) => {
  //Make an array of months to convert the date from number form (1/1/2021)
  //into word form (January 1, 2021)
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
  //Make an array of weekdays to convert the weekday from number form (0)
  //into word form (Monday)
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

  //State is currently an array wrapped in an object.
  //Create workouts which contains the array of workouts, not wrapped in an object.
  const workouts = Object.values(state)[0];
  //Get the most recent workout which is always at the end of the array
  const mostRecentWorkout = workouts[workouts.length - 1];
  //Get the date of the most recent workout
  const mostRecentWorkoutDate = mostRecentWorkout.date;

  //Make a function that returns an array of workouts that all have the same date
  //as the date passed into the function
  const filterWorkoutsByDate = (date) => {
    return workouts.filter((workout) => {
      return (
        workout.date.getDate() === date.getDate() &&
        workout.date.getMonth() === date.getMonth() &&
        workout.date.getYear() === date.getYear()
      );
    });
  };

  //Make a function that returns an array of arrays
  //The innermost array contains workouts that all have the same date
  //The outermost array contains these arrays with the last element being
  //the most recent date and the first element being the date farthest back in time
  const groupWorkoutsByDate = (workouts) => {
    //Duplicate the workouts array and assign it to the remainingWorkouts array
    const remainingWorkouts = [...workouts];
    //Create an empty array that will be filled with arrays
    //that have workouts of the same date
    const newWorkoutsArray = [];
    while (remainingWorkouts.length > 0) {
      //add the workouts array of the olderst date to the end of the newWorkoutsArray
      newWorkoutsArray.push(filterWorkoutsByDate(remainingWorkouts[0].date));
      //remove the workouts added to newWorkoutsArray from remainingWorkouts
      remainingWorkouts.splice(
        0,
        newWorkoutsArray[newWorkoutsArray.length - 1].length
      );
    }
    return newWorkoutsArray;
  };

  //Make a function that returns an array of workouts that all
  //have the same distance and the same date
  const filterWorkoutsByDistanceAndDate = (distance, dateCollection) => {
    return dateCollection.filter((workout) => {
      return workout.distance === distance;
    });
  };

  //Make an array that contains all workouts that are grouped by the date
  //corresponding to each workout
  const workoutsSortedByDate = groupWorkoutsByDate(workouts);

  //Make a state variable that changes the workouts that are displayed on the screen
  //depending on the date corresponding to the workouts
  const [dateDisplayed, setDateDisplayed] = useState(mostRecentWorkoutDate);

  //Make a state variable that keeps track of the index of the workoutsSortedByDate array
  const [dateIndex, setDateIndex] = useState(workoutsSortedByDate.length - 1);

  //Create a function that can be called to go forward in time or back in time
  //for the workouts that are displayed on the screen
  function updateDateDisplayed(change) {
    //if increase is passed into the function, move towards the end of the workoutsSortedByDate
    //array by one index, making the workouts displayed be of a more recent date
    if (change === "increase" && dateIndex + 1 < workoutsSortedByDate.length) {
      setDateDisplayed(workoutsSortedByDate[dateIndex + 1][0].date);
      setDateIndex(dateIndex + 1);
      //if decrease is passed into the function, move towards the begining of the workoutsSortedByDate
      //array by one index, making the workouts displayed be of a older date
    } else if (change === "decrease" && dateIndex - 1 >= 0) {
      setDateDisplayed(workoutsSortedByDate[dateIndex - 1][0].date);
      setDateIndex(dateIndex - 1);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        {/*If the left arrow button is pressed, display workouts of an older date */}
        <TouchableOpacity onPress={() => updateDateDisplayed("decrease")}>
          <View style={styles.iconButton}>
            <Ionicons name="chevron-back" style={styles.iconLeft} />
          </View>
        </TouchableOpacity>
        {/*Display the date corresponding to all the workouts displayed */}
        <Text style={styles.text}>
          {months[dateDisplayed.getMonth()]} {dateDisplayed.getDate()},{" "}
          {dateDisplayed.getFullYear()}
        </Text>
        {/*If the right arrow button is pressed, display workouts of a more recent date */}
        <TouchableOpacity onPress={() => updateDateDisplayed("increase")}>
          <View style={styles.iconButton}>
            <Ionicons name="chevron-back" style={styles.iconRight} />
          </View>
        </TouchableOpacity>
      </View>
      {/*Pass the title and an array of workouts of the corresponding distance
      and date to the WorkoutList component. Do this for every distance available. */}
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
