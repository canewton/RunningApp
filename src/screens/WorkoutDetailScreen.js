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
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

//const dataNotGraph = route.params.hard_data;

const WorkoutDetailScreen = ({ route }) => {
  const { distance, time, date, distance_data, time_data } = route.params;

  const datadumb = {
    labels: time_data, //filler, shall add real stuff later,
    datasets: [
      {
        data: distance_data,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    // legend: ["running data(dummy)"] // optional
  };

  var max_of_array = Math.max.apply(Math, distance_data);
  var max_of_array_time = Math.max.apply(Math, time_data);


  //sudo code for velocity-time graph..... status: error
  //1. for loop to call for lenght of hard_data .... done!
  //2. use equation on this use i  and i-1 for t1 and t2 ..... done!
  //3. port into it's own array call velcoty_array ......error
  //4. new graph for the viwer ..... done!




  const getvelocity = (hard_data, time_data) => {
    var content = [];
    for (let i = 0; i < hard_data.length; i++) {
      const item = hard_data[i];
      

      var previoustime = time_data[i-1];
      var previouspos = hard_data[i-1];

      var a_pos = previouspos - hard_data[i];
      var a_time = previoustime - hard_data[i];

      var gamer_juice = a_pos/a_time;
//yyuu
      content.push(<FlatList key={item.id}>{item.gamer_juice}</FlatList>);
    }
//fh

    return content;
  };

 var velocity_data = getvelocity(hard_data,time_data);

  const data_velocity = {
    labels: time_data, //filler, shall add real stuff later,
    datasets: [
      {
        data: velocity_data,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
   // legend: ["running data(dummy)"] // optional
    

  };



  const screenWidth = Dimensions.get("window").width;


  //sgsfbdsb
  // var max_of_array = Math.max.apply(Math, [49,49,49,49,50,50,51,51,52,52,53,53]);

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Distance</Text>
      </View>
      <Text style={styles.text}>
        Distance: <Text style={styles.darkGreenText}>{distance}</Text>
      </Text>
      <Text style={styles.text}>
        Time: <Text style={styles.darkGreenText}>{time}</Text>
      </Text>
      <View style={styles.header}>
        <Text style={styles.title}>position-time</Text>
      </View>
      <View>
        <LineChart
          data={datadumb}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={false}
          verticalLabelRotation={0}
        />


         <View style={styles.header}>
        <Text style={styles.title}>position-time</Text>
      </View>
      
        <Text style={styles.text}>Your top speed was: <Text style = {styles.greenText} >{max_of_array}</Text> </Text>


        <Text style={styles.text}>
          Your top speed was:{" "}
          <Text style={styles.greenText}>{max_of_array}</Text>{" "}
        </Text>
      </View>

      <Text style={styles.text}>Top Speed Timestamp: <Text style = {styles.darkGreenText} >{max_of_array_time}</Text> </Text>
      <View >
      <View style={styles.header}>
        <Text style={styles.title}>velocity-time</Text>
      </View>

      
      <LineChart
          data={data_velocity}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={(false)}
          verticalLabelRotation = {0}
        />
        </View>
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
