import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WindowHeader from "../components/WindowHeader";
import { Ionicons } from "@expo/vector-icons";

//Create a component that gives the user a glimpse of the WorkoutListScreen contents
const AchievementsWindow = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <WindowHeader title="Recent Achievements" />
        <Ionicons name="trophy-sharp" color="white" size={30} />
      </View>
      <Text style={styles.text}>Completed: Run 5,000 meters</Text>
      <Text style={styles.text}>Completed: Run in 2/4 seasons</Text>
      <Text style={styles.text}>
        Completed: Beat your personal record 3 times
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    paddingBottom: 5,
    color: "white",
  },
});

export default AchievementsWindow;
