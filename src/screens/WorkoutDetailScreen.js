import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const WorkoutDetailScreen = ({ route }) => {
  const { distance, data, date } = route.params;

  const datadumb = {
    labels: [0,0,0,0,0,0,0,0,0,0,0,0],
    datasets: [
      {
        data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["running data(dummy)"] // optional
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Distance</Text>
      </View>
      <Text style={styles.text}>Distance: {distance}</Text>
      <Text style={styles.text}>Time: {data}</Text>
      <View style={styles.header}>
        <Text style={styles.title}>Velocity</Text>

      </View>
      <View>
      <LineChart
          data={datadumb}
          width={300}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        />
      </View>
      <Text style={styles.text}>Top Speed:</Text>
      <Text style={styles.text}>Top Speed Timestamp:</Text>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
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
