import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const WorkoutListScreen = ({ navigation }) => {
  console.log(WorkoutContext);
  const { state, addWorkout } = useContext(WorkoutContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(workout) => workout.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View>
                <Text>{item.date}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WorkoutListScreen;
