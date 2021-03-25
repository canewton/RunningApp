import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkoutRankings = (state) => {
  //State is currently an array wrapped in an object.
  //Create workouts which contains the array of workouts, not wrapped in an object.
  const workouts = Object.values(state)[0];

  //get the navigation prop to navigate between screen with this component
  const navigation = useNavigation();

  //get today's date
  var todaysDate = new Date();

  //sort workouts from lowest time to highest time
  for (var i = 0; i < workouts.length; i++) {
    for (var j = i + 1; j < workouts.length; j++) {
      if (
        workouts[i].time_data[workouts[i].time_data.length - 1] >
        workouts[j].time_data[workouts[j].time_data.length - 1]
      ) {
        var temp = workouts[i];
        workouts[i] = workouts[j];
        workouts[j] = temp;
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={workouts}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            //Make every workout a button that navigates to the Workout Details page,
            //which displays the workout with more detail.
            //Pass the distance, data, and date variables of the workout that
            //was pressed to the Workout Details screen so that it can be diplayed there
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Workout Details", {
                  distance: item.distance,
                  time: item.time,
                  date: item.date.toString(),
                  distance_data: item.distance_data,
                  time_data: item.time_data,
                })
              }
            >
              <View style={styles.container}>
                {/*Display the rank, time, and date*/}
                <View
                  style={
                    todaysDate.getDate() === item.date.getDate() &&
                    todaysDate.getMonth() === item.date.getMonth() &&
                    todaysDate.getFullYear() === item.date.getFullYear()
                      ? styles.todaysRankBox
                      : styles.rankBox
                  }
                >
                  <Text style={styles.rank}>{item.rank}</Text>
                </View>
                {/*If the current date is equal to the date that the workout was done,
                highlight the workout for the user to find easier*/}
                <View
                  style={
                    todaysDate.getDate() === item.date.getDate() &&
                    todaysDate.getMonth() === item.date.getMonth() &&
                    todaysDate.getFullYear() === item.date.getFullYear()
                      ? styles.todaysWorkout
                      : styles.workout
                  }
                >
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.date}>
                    {item.date.getMonth() + 1}/{item.date.getDate()}/
                    {item.date.getFullYear()}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //the style of the workout
  container: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
  },
  //the box where the rank (1,2,3,4,...) is in if it's date is not equal to the current date.
  //It is a darker shade of blue than the rest of the workout button
  rankBox: {
    height: 50,
    width: 50,
    backgroundColor: "#19b0b5",
    justifyContent: "center",
    alignItems: "center",
  },
  //the box where the rank (1,2,3,4,...) is in if it's date is equal to the current date
  //It is a darker shade of green than the rest of the workout button
  todaysRankBox: {
    height: 50,
    width: 50,
    backgroundColor: "#19B092",
    justifyContent: "center",
    alignItems: "center",
  },
  //the number that describes the rank of a workout
  rank: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  //the workout button that contains the time and date if it's date is not equal to the current date
  workout: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#12cdd4",
    flex: 1,
  },
  //the workout button that contains the time and date if it's date is equal to the current date
  todaysWorkout: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#12CDA3",
    flex: 1,
  },
  //the style of the time text inside the workout button
  time: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  //the style of the date text inside the workout button
  date: {
    fontSize: 12,
    color: "white",
  },
});

export default WorkoutRankings;
