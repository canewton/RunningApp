import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const WorkoutDetailScreen = ({ route }) => {
  const { distance, time, date, distance_data, time_data } = route.params;

  const lineChartDistanceData = {
    labels: time_data,
    datasets: [
      {
        data: distance_data,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const velocity_data = (distanceDataArray) => {
    const velocityArray = distanceDataArray.map((distance) =>
      distanceDataArray.indexOf(distance) === 0
        ? 0
        : distance - distanceDataArray[distanceDataArray.indexOf(distance) - 1]
    );
    return velocityArray;
  };

  var maxVelocity = Math.max.apply(Math, velocity_data(distance_data));

  const lineChartVelocityData = {
    labels: time_data,
    datasets: [
      {
        data: velocity_data(distance_data), //velocity_data,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Distance Graph</Text>
      </View>
      <View>
        <LineChart
          data={lineChartDistanceData}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={false}
          verticalLabelRotation={0}
        />
        <Text style={styles.text}>
          Sprint Distance: <Text style={styles.darkGreenText}>{distance}</Text>
        </Text>
        <Text style={styles.text}>
          Sprint Time: <Text style={styles.darkGreenText}>{time}</Text>
        </Text>
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Velocity Graph</Text>
        </View>

        <LineChart
          data={lineChartVelocityData}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={false}
          verticalLabelRotation={0}
        />
      </View>
      <Text style={styles.text}>
        Your top speed was:{" "}
        <Text style={styles.greenText}>{maxVelocity.toFixed(2)} m/s</Text>
      </Text>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: "rgb(242, 242, 242)",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "rgb(242, 242, 242)",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  strokeWidth: 2.5, // optional, default 3
  barPercentage: 0.6,
  useShadowColorFromDataset: true, // optional
};
//#1E2923
//#08130D
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
  greenText: {
    color: "green",
    fontSize: 24,
    marginLeft: 10,
  },
  darkGreenText: {
    color: "#228B22",
    fontSize: 24,
    marginLeft: 10,
  },
});

export default WorkoutDetailScreen;
