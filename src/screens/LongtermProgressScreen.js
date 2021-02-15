import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const LongtermProgressScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);

  return (
    <View>
      <Text>LongtermProgress Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LongtermProgressScreen;
