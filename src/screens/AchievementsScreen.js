import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import AchievementHeader from "../components/AchievmentHeader";
import Achievment from "../components/Achievment";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
//import DaysInAWeekGoals from "../AchievementGoals/DaysInAWeekGoal";
//import HundredInFifteen from "../AchievementGoals/HundredInFifteen";
import { RunMiles } from "../AchievementGoals/RunMiles";
import { TenKTotal } from "../AchievementGoals/TenKTotal";
import { RunFourDistances } from "../AchievementGoals/RunFourDistances";
//import BeatYourBest from "../AchievementGoals/BeatYourBest";
//import FourSeasons from "../AchievementGoals/FourSeasons";
import { Context as AchievementsContext } from "../context/AchievementsContext";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const AchievementsScreen = () => {
  const workouts = useContext(WorkoutContext);
  const achievements = useContext(AchievementsContext);

  console.log(achievements);

  useEffect(() => {
    achievements.editAchievement(
      TenKTotal(workouts.state),
      "Run for _ meters in total"
    );
    achievements.editAchievement(
      RunMiles(workouts.state),
      "Run _ miles in one day"
    );
    achievements.editAchievement(
      RunFourDistances(workouts.state),
      "Run _ different distances"
    );
    console.log(achievements.state[0]);
  }, [workouts.state]);

  //green color: #8fd14f
  //blue color: #12cdd4

  const windowWidth = Dimensions.get("window").width;

  const data = {
    data: [0.78],
  };

  return (
    <View>
      <Text style={styles.title}> Rank </Text>

      <View style={styles.rank}>
        <FontAwesome5 name="award" size={80} color="#89cff0" />
      </View>

      <ProgressChart
        data={data}
        width={windowWidth}
        height={200}
        strokeWidth={30}
        radius={80}
        hideLegend={true}
        chartConfig={{
          backgroundGradientFrom: "rgb(242,242,242)",
          backgroundGradientTo: "rgb(242,242,242)",
          color: (opacity = 1) => `rgba(143, 209, 79, ${opacity})`,
          style: {
            borderRadius: 20,
          },
        }}
        style={{
          marginVertical: 10,
        }}
      />
      <Achievment title="Run for _ meters in total"/>
      <View style={styles.icons}>
        <View style={styles.trophyAndCountContainer}>
          <Ionicons name="md-trophy-sharp" size={30} color="#CD7F32" />
          <Text style={styles.trophyCount}>14</Text>
        </View>
        <View style={styles.trophyAndCountContainer}>
          <Ionicons name="md-trophy-sharp" size={30} color="silver" />
          <Text style={styles.trophyCount}>9</Text>
        </View>
        <View style={styles.trophyAndCountContainer}>
          <Ionicons name="md-trophy-sharp" size={30} color="gold" />
          <Text style={styles.trophyCount}>3</Text>
        </View>
      </View>
      <Text style={styles.title}> Goals</Text>

      
      <AchievementHeader
        title="To Do"
        goals={
          [
          ]
        }
      />
      <AchievementHeader title="Completed" goals={[]} />
    </View>
  );
};



const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rank: {
    position: "absolute",
    top: 110,
    bottom: 50,
    left: 177,
    zIndex: 100,
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
  trophyCount: {
    fontSize: 24,
    marginLeft: 5,
  },
  trophyAndCountContainer: {
    flexDirection: "row",
  },
});

export default AchievementsScreen;
//put in all of the goals into context 
//update the acheivmetnt component to compare progress and medals
//when gold is met move acheivment component under done
//update medal variables and progress bar to show on screen

/*
goals={[
  {
    goalName: "Run 10,000 meters in total",
    progress: "To gold: 5,600/10,000 completed",
    Done: false,
  },
  {
    goalName: "Run for 4 days of the week",
    progress: "To bronze: 1/4 completed",
    Done: false,
  },
  {
    goalName: "Run for all 4 seasons",
    progress: "To bronze: 1/4 completed",
    Done: false,
  },
  {
    goalName: "Beat your personal best 3 times",
    progress: "To bronze: 2/3 completed",
    Done: false,
  },
  {
    goalName: "Run all 4 different distances",
    progress: "To gold: 3/4 completed",
    Done: false,
  },
  {
    goalName: "Run 5 times a week for a month",
    progress: "To silver: 2/4 completed",
    Done: false,
  },
  {
    goalName: "Run 4 times a week for 6 months",
    progress: "To bronze: 1/3 completed",
    Done: false,
  },

  {
    goalName: "Run 100 meters in 15 seconds",
    progress: "To gold: 1/6 completed",
    Done: false,
  },
  {
    goalName: "Run 1 mile in one day",
    progress: "To bronze: 0/3 completed",
    Done: false,
  },
  //fix all this
]}
*/


// make an array of all the achievment components if (loop through list) .done = true move to another array [IS THIS POSSIBLE]