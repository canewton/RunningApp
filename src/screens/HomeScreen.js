import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import WorkoutListWindow from "../feed/WorkoutListWindow";
import WindowHeader from "../components/WindowHeader";

//This screen is the first screen that the user sees
//Get the navigation prop
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {/*Display all the windows that are in the feed folder
      Make all the windows a button that navigates to the corresponding screen */}
      <TouchableOpacity onPress={() => navigation.navigate("Workouts")}>
        <View style={styles.button}>
          <WorkoutListWindow />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Achievements")}>
        <View style={styles.button}>
          <WindowHeader title="Recent Achievements" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
        <View style={styles.button}>
          <WindowHeader title="Today's Workout Ranks High" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
        <View style={styles.button}>
          <WindowHeader title="Your Longterm Progress" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
        <View style={styles.button}>
          <WindowHeader title="Quick Stats" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <View style={styles.button}>
          <WindowHeader title="Settings" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingBottom: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "rgb(255,255,255)",
  },
});

export default HomeScreen;
