import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import Acheivement from "../components/Achievment";

const AchievementsScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);

  // can we put an array in this bitch?

  return (
    <View> 
      <Acheivement
        title="Run 100 meters"
        const goals = {[
          {medal: "gold"},
          {medal: "silver" },
          {medal: "bronze" },
        ]}

      />
      <Acheivement
        title="Run 4 seasons"
        const goals = {[
          {medal: "gold"},
          {medal: "silver"},
          {medal: "bronze"},
        ]}
       />
    </View>
  );
};



export default AchievementsScreen;

/*
overall qs:
will we need to be able to click on them to see more info?? 
our list and key extractor + their location is very scuffed
what do we display on the opening page? how?
where do we compare the data to the requirments (i assume here?)
+LUCA DESIGN??

hello


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
