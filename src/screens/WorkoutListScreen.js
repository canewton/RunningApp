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
      <View style={styles.distanceView}>
        <Text style={styles.distance}>200 meters</Text>
      </View>
      <FlatList
        data={state}
        keyExtractor={(workout) => workout.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.workout}>
                <Text style={styles.time}>{item.data}</Text>
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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    backgroundColor: "#f38375",
  },
  date: {
    fontSize: 12,
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  distanceView: {
    paddingVertical: 8,
    backgroundColor: "#EF6351",
    alignItems: "center",
  },
});

export default WorkoutListScreen;
