import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const LongtermProgressScreen = () => {


 
  
  
  //green color: #8fd14f
  //blue color: #12cdd4
 


  //times and such
  //how fast you completed the runs
  //all times
  return (
    <View>
      <View style={styles.headerBlue}>
        <Text style={styles.title}>LongtermProggress</Text>
      </View>
      

      <View style={styles.headerBlue}>
        <Text style={styles.title}>100 meters</Text>
      </View>
      <Text style={styles.text}>you have run a total of--  </Text>

      <View style={styles.headerBlue}>
        <Text style={styles.title}>200 meters</Text>
      </View>

      </View>
  );


};



const styles = StyleSheet.create({
  headerBlue: {
    backgroundColor: "#12cdd4",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "center",
  },
  headerGreen: {
    backgroundColor: "#008000",
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



export default LongtermProgressScreen;
