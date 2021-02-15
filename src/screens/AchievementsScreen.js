import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const AchievementsScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);

  return (
    <View>
      <Text>Challenges Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AchievementsScreen;
