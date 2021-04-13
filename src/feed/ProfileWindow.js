import React, {useState, useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import WindowHeader from "../components/WindowHeader";
import { Ionicons } from "@expo/vector-icons";
import TotalDistance from "../components/TotalDistance";
import TotalTime from "../components/TotalTime";
import { Context as WorkoutContext } from "../context/WorkoutContext";


//Create a component that gives the user a glimpse of the WorkoutListScreen contents
const ProfileWindow = () => {
  const { state } = useContext(WorkoutContext);
  return (
    <View>
      <View style={styles.headerContainer}>
        <WindowHeader title="Profile" />
        <Ionicons name="person-circle-sharp" size={35} color="white" />
      </View>
      <Text style={styles.text}>Total Meters Run:</Text>
      <TotalDistance state={state} Style={styles.text}/>
      <Text style={styles.text}>Total Time Spent Running:</Text>
      <TotalTime state={state} style={styles.text}/>
      <Text style={styles.text}>2 New Friends Added</Text>
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

export default ProfileWindow;
