import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorkoutDetailScreen = ({ route }) => {
  const { distance, data, date } = route.params;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Distance</Text>
        <Text style={styles.text}>Luisa was here :) </Text>

      </View>
      <Text style={styles.text}>Distance: {distance}</Text>
      <Text style={styles.text}>Time: {data}</Text>
      <View style={styles.header}>
        <Text style={styles.title}>Velocity</Text>
      </View>
      <Text style={styles.text}>Top Speed:</Text>
      <Text style={styles.text}>Top Speed Timestamp:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#12cdd4",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default WorkoutDetailScreen;
