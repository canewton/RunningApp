import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import AchievementHeader from "../components/AchievmentHeader";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const AchievementsScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4

  const data = {
    data: [0.78],
  };

  return (
    <View>
      <Text style={styles.title}> Rank </Text>
      <View style={styles.rank} >
      <FontAwesome5 name="award" size={80} color="#89cff0" />
      </View>
      <ProgressChart
        data={data}
        width={480}
        height={200}
        strokeWidth={20}
        radius={80}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          color: (opacity = 1) => `rgba(143, 209, 79, ${opacity})`,
          style: {
            borderRadius: 20},
            
        }}
        />
      <View style={styles.icons} >
      <Ionicons name="md-trophy-sharp" size={40} color="brown" />
      <Text>5</Text>
      <Ionicons name="md-trophy-sharp" size={40} color="gold" />
      <Text>7</Text>
      <Ionicons name="md-trophy-sharp" size={40} color="silver" />
      <Text>3</Text>
      </View>
      <Text style={styles.title}> Goals</Text>
      <AchievementHeader
        title="To Do"
        goals={[
          { goalName: "Run 10,000 meters in total", progress: "To bronze: 2/3 completed" ,Done: false },
          { goalName: "Run for 4 days the week", progress: "To bronze: 2/3 completed", Done: false },
          { goalName: "Run for 7 miles in one day", progress: "To bronze: 2/3 completed", Done: false },
          { goalName: "Run for 4 seasons",progress: "To bronze: 2/3 completed",  Done: false },
          { goalName: "Beat personal bests", progress: "To bronze: 2/3 completed", Done: false },
          { goalName: "Run 8 different distances", progress: "To bronze: 2/3 completed", Done: false },
          { goalName: "Run 5 times a week for a month", progress: "To bronze: 2/3 completed", Done: false },
          { goalName: "Run 4 times a week for 6 months", progress: "To bronze: 2/3 completed", Done: false },
          { goalName: "Run 100 meters in 40 seconds", progress: "To bronze: 2/3 completed", Done: false },
          //when we get data need to sense if acheivment has been met and then set done to true
          //if done == true pass into completed acheivments component
        ]}
      />
      <AchievementHeader title="Completed" goals={[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly"
 },
 rank:{
 position: "absolute",
 top: 100,
 bottom: 50,
 left: 165,
 zIndex: 100
 },
 title: {
  borderRadius: 5,
  paddingVertical: 2,
  paddingHorizontal: 10,
  justifyContent: "space-between",
  borderWidth: 2,
  borderColor: "black",
  backgroundColor: "#12cdd4",
  textAlign: "center",
  fontSize: 30,
  color: "white",
  fontWeight: "bold",
  
  
 },
 });
 
export default AchievementsScreen;

/*
overall qs:
will we need to be able to click on them to see more info?? 
our list and key extractor + their location is very scuffed
what do we display on the opening page? how?
where do we compare the data to the requirments (i assume here?)
+LUCA DESIGN??



still todo
progress bar
requirments styling
comparing data
individual functions

ERROR:
collapsable goals??

done
will format text of the passed in requirment 

list possible acheivemnts and their requirments in  achivements screen
that will pass in info on individual acheivements and 
their medal requirments - component will format it and screen will display it

*/
