import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WindowHeader from "../components/WindowHeader";
import { Ionicons } from "@expo/vector-icons";

//Create a component that gives the user a glimpse of the WorkoutListScreen contents
const ProfileWindow = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <WindowHeader title="Profile" />
        <Ionicons name="person-circle-sharp" size={35} color="white" />
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

export default ProfileWindow;
