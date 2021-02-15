import React, { useContext, useEffect } from "react";
import { View, StyleSheet, LogBox } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import DayFilter from "../components/DayFilter";
import { ScrollView } from "react-native-gesture-handler";
import { useLinkProps } from "@react-navigation/native";

const WorkoutListScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const { state, addWorkout } = useContext(WorkoutContext);

  return (
    <View style={styles.view}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DayFilter state={state} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default WorkoutListScreen;
