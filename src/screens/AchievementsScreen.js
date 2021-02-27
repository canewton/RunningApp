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
    <View style={styles.name}> 
      <Acheivement
        title="Run 100 meters"
        // const goals = 
        //   {name: "gold", requirements: },
        //   {name: "silver", requirements: },
        //   {name: "bronze", requirements: },
        // ]
      />
      <Acheivement
        title="Run 4 seasons"
      //   const goals = [
      //     {name: "gold", requirements: },
      //     {name: "silver", requirements: },
      //     {name: "bronze", requirements: },
      //   ]
       />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
  paddingVertical: 10,
  backgroundColor: "#8fd14f",
  alignItems: "center",
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: "gray",
  marginBottom: 15,
}});

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
all styling
comparing data
individual functions


done
will format text of the passed in requirment 

list possible acheivemnts and their requirments in  achivements screen
that will pass in info on individual acheivements and 
their medal requirments - component will format it and screen will display it

*/
