import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
//import { useTheme } from "@react-navigation/native";

const WorkoutListScreen = ({ navigation }) => {
  const { state, addWorkout } = useContext(WorkoutContext);

  //const { colors } = useTheme();

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(workout) => workout.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.workout}>
                <Text style={styles.time}>{item.data} seconds</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  workout: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    backgroundColor: "#B8B8FF",
  },
  date: {
    fontSize: 12,
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WorkoutListScreen;
