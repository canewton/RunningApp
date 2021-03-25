import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import WorkoutRankings from "../components/WorkoutRankings";

const WorkoutRankingsScreen = () => {
  //get the data from workout context
  const { state } = useContext(WorkoutContext);

  //make a state variable that represents the distance of workouts that is displayed on the screen
  const [distanceDisplayed, setDistanceDisplayed] = useState("100 meters");

  //get the width of the screen in pixels
  const windowWidth = Dimensions.get("window").width;

  //make a function that returns an array of workouts with the same distance
  const filterWorkoutsByDistance = (distance) => {
    return state.filter((workout) => {
      return workout.distance === distance;
    });
  };

  //get the width in pixels of 1/numColumns of the screen
  const calculatedColumnSize = (numColumns) => {
    var size = windowWidth / numColumns;
    return size;
  };

  //initialize the all of the distance tab's names, the distance they correspond to, and their id (for the flatlist)
  const tabs = [
    {
      name: "100",
      id: 1,
      distance: "100 meters",
    },
    {
      name: "200",
      id: 2,
      distance: "200 meters",
    },
    {
      name: "400",
      id: 3,
      distance: "400 meters",
    },
    {
      name: "800",
      id: 4,
      distance: "800 meters",
    },
  ];

  //create tabs that displays wokouts of the same distance on the ranking screen
  const DistanceTabs = () => {
    return (
      <View>
        <FlatList
          vertical
          numColumns={tabs.length}
          data={tabs}
          keyExtractor={(index) => index.id}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setDistanceDisplayed(item.distance)}
              >
                <View
                  //space out the tabs evenly accross the entire width of the screen
                  style={{
                    height: 50,
                    width: calculatedColumnSize(tabs.length),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    //if the tab is pressed, make it bold to show that it is the active tab
                    style={
                      distanceDisplayed === item.distance
                        ? { fontWeight: "bold" }
                        : {}
                    }
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  //return the screen with the distance tabs on top and the ranking below it
  return (
    <View style={{ flex: 1 }}>
      <DistanceTabs />
      <WorkoutRankings state={filterWorkoutsByDistance(distanceDisplayed)} />
    </View>
  );
};

const styles = StyleSheet.create({
  //stylize the distance tab when it is active
  selectedDistance: {
    fontWeight: "bold",
  },
  //stylize the distance tab when it is inactive
  unselectedDistance: {
    fontWeight: "300",
  },
});

export default WorkoutRankingsScreen;
