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


//const dataNotGraph = route.params.hard_data;

const WorkoutDetailScreen = ({ route }) => {
  const { distance, data, date,hard_data } = route.params;

  const datadumb = {
    labels: [0,0,0,0,0,0,0,0,], //filler, shall add real stuff later,
    datasets: [
      {
        data: hard_data,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["running data(dummy)"] // optional
    

  };



var max_of_array = Math.max.apply(Math, (hard_data) );



// var max_of_array = Math.max.apply(Math, [49,49,49,49,50,50,51,51,52,52,53,53]);

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
      <View >
      <LineChart
          data={datadumb}
          width={300}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={(false)}
        />
        
        <Text style={styles.text}>Your top speed was:{max_of_array} </Text>

      </View>
     
      <Text style={styles.text}>Top Speed Timestamp:</Text>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#FFFFF1",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFF1",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: true // optional
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
});

export default WorkoutDetailScreen;
