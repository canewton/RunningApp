import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import DayFilter from "../components/DayFilter";
import { ScrollView } from "react-native-gesture-handler";

const WorkoutListScreen = ({ navigation }) => {
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
