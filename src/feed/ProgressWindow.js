import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import WindowHeader from "../components/WindowHeader";
import { FontAwesome } from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

//Create a component that gives the user a glimpse of the WorkoutListScreen contents
const ProgressWindow = () => {
  const screenWidth = Dimensions.get("window").width;

  const lastThirty = {
    labels: [], //filler, shall add real stuff later,
    datasets: [
      {
        data: [
          10.8,
          10.82,
          10.79,
          10.63,
          10.36,
          10.3,
          10.2,
          10.22,
          10.13,
          10.19,
          10.2,
          10.1,
          10.07,
          10.05,
          10.1,
          9.8,
          9.82,
          9.79,
          9.63,
          9.36,
          9.3,
          9.2,
          9.22,
          9.13,
          9.19,
          9.2,
          9.1,
          9.07,
          9.05,
          9.1,
        ],
        // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      },
    ],
    //legend: ["your last seven runs"] // optional
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <WindowHeader title="Longterm Progress" />
        <FontAwesome name="line-chart" color="white" size={30} />
      </View>
      <BarChart
        style={{
          marginVertical: 2,
          borderRadius: 5,
        }}
        data={lastThirty}
        width={screenWidth - 20}
        height={150}
        yAxisLabel=""
        chartConfig={chartConfig2}
        verticalLabelRotation={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
});

const chartConfig2 = {
  backgroundGradientFrom: "#12cdd4",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#12cdd4",
  backgroundGradientToOpacity: 0.1,
  color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
  // strokeWidth: 2.5, // optional, default 3
  // barPercentage: 0.6,
  // useShadowColorFromDataset: true, // optional
  fillShadowGradientOpacity: 1,
  fillShadowGradient: "white",
  strokeWidth: 2,
  barPercentage: 0.2,
};

export default ProgressWindow;
