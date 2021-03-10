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
});

export default AchievementsWindow;
