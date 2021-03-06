import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const SettingsScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);

  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
