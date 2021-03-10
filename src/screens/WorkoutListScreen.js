import React, { useContext, useEffect } from "react";
import { View, StyleSheet, LogBox } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import DayFilter from "../components/DayFilter";
import { ScrollView } from "react-native-gesture-handler";

const WorkoutListScreen = () => {
  //Ignore the warnings that talk about Flatlists being nested in a Scrollview
  //This needs to happen because the Flatlist is in the collapsible list and
  //the scrollview allows the user to scroll down through the collapsible list
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  //Get the workout data from WorkoutContext
  const { state } = useContext(WorkoutContext);

  return (
    //Display WorkoutLists and the DayFilter
    //Allow the user to scroll through the WorkoutLists
    <View style={styles.view}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DayFilter state={state} />
      </ScrollView>
    </View>
  );
};

//make sure that the outermost view component fills up the entire screen
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default WorkoutListScreen;
