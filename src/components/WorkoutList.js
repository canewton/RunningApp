import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";

const WorkoutList = ({ title, workouts }) => {
  //don't show this list if there is no workouts in it
  if (!workouts.length) {
    return null;
  }

  //get the navigation prop to navigate between screen with this component
  const navigation = useNavigation();

  //create a state variable that defines if the collapsible list is collapsed or not
  const [collapsed, setCollapsed] = useState(false);

  //a function that collapses or expands the collapsible list
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View>
      {/*Make a button that expands and collapses the collapsible list*/}
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </TouchableOpacity>
      {/*Make a list that collapses and expands. Make the list start out as expanded.*/}
      <Collapsible collapsed={collapsed} align="center">
        <View style={styles.workoutList}>
          {/*Pass the workout data into a flatlist component.
          The flatlist will display every workout that is passed to it.
          Disable scrolling for the flatlist since it is in a collapsible list*/}
          <FlatList
            data={workouts}
            keyExtractor={(index) => index.id}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                //Make every workout a button that navigates to the Workout Details page,
                //which displays the workout with more detail.
                //Pass the distance, data, and date variables of the workout that
                //was pressed to the Workout Details screen so that it can be diplayed there
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Workout Details", {
                      distance: item.distance,
                      data: item.data,
                      date: item.date.toString(),
                      hard_data: item.hard_data
                    })
                  }
                >
                  {/*Display the date and time on the workout button*/}
                  <View style={styles.workout}>
                    <Text style={styles.time}>{item.data}</Text>
                    <Text style={styles.date}>
                      {item.date.getDate()}/{item.date.getMonth() + 1}/
                      {item.date.getFullYear()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#8fd14f",
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  workout: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#12cdd4",
  },
  workoutList: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  time: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  date: {
    fontSize: 12,
    color: "white",
  },
});

export default WorkoutList;
