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
  const { state } = useContext(WorkoutContext);

  const data = {
    data: [0.78],
  };

  return (
    <View>
      <Text style={styles.title}> Rank </Text>
      <View style={styles.rank}>
        <FontAwesome5 name="award" size={65} color= '#89CFF0' />
        </View>
      <ProgressChart
        data={data}
        width={480}
        height={200}
        strokeWidth={20}
        radius={60}
        backgroundColor="#3d5875"
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: 'white',
          color: (opacity = 10) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 20,
          },
        }}
        hideLegend={false}
      />

      <View style={styles.icons}>
        <Ionicons name="md-trophy-sharp" size={40} color="brown" />
        <Text>5</Text>
        <Ionicons name="md-trophy-sharp" size={40} color="gold" />
        <Text>3</Text>
        <Ionicons name="md-trophy-sharp" size={40} color="silver" />
        <Text>6</Text>
      </View>
      <Text style={styles.title}> Goals </Text>
      <AchievementHeader
        title="To Do"
        goals={[
          { goalName: "Run ____ meters in total", Done: false },
          { goalName: "Run for ___ days the week", Done: false },
          { goalName: "Run for ____  miles in one day", Done: false },
          { goalName: "Run for ___ seasons", Done: false },
          { goalName: "Beat personal bests", Done: false },
          { goalName: "Run ___ different distances", Done: false },
          { goalName: "Run ___ times a week for a month", Done: false },
          { goalName: "Run __ times a week for 6 months", Done: false },
          { goalName: "Run 100 meters in ____ seconds", Done: false },
          //when we get data need to sense if acheivment has been met and then set done to true
          //if done == true pass into completed acheivments component
        ]}
      />
      <AchievementHeader title="completed" goals={[]} />
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
top: 110,
bottom: 50,
left: 170,
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
