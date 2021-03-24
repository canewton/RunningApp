import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import Acheivement from "../components/Achievment";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const AchievmentDetailScreen = ({route}) => {
  const{goalName}=route.params;
  console.log(goalName);
    return ( 
      <View><Text> {goalName} </Text></View>
    );
};
export default AchievmentDetailScreen;
