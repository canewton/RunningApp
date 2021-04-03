/*import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DaysInAWeekGoals = ({ workouts, amountOfDays }) => {
  const done = false;
  

  return (
    <View>
      <FlatList
        data={filterWorkoutsByDate(new Date("1/1/2021"))}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.date.getMonth() + 1}/{item.date.getDate()}/
              {item.date.getFullYear()}
            </Text>
            //for the items in flatlist (is this looping?) if get day minus comparingdate is less than 7 set
            //comparing day to the first day and increase counter (this is also the variable for bronze gold and silver) (u can erase progress??)
            //if increase counter = 4 set done to true
            //talk to caden: idk if this is right; a very java way to solve

          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DaysInAWeekGoals; */
