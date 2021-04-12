import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";
import Achievment from "../components/Achievment";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const AchievementHeader = ({ title, goals,}) => {
  const { state } = useContext(WorkoutContext);
  //create a state variable that defines if the collapsible list is collapsed or not
  const [collapsed, setCollapsed] = useState(true);

  const navigation = useNavigation();

  //a function that collapses or expands the collapsible list
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.title}>
          <Text style={styles.Text}>{title}</Text>
        </View>
      </TouchableOpacity>

      {/*Make a list that collapses and expands. Make the list start out as expanded.*/}
      <Collapsible collapsed={collapsed} align="center">
        <View style={styles.workout}>
          {/*Pass the workout data into a flatlist component.
          The flatlist will display every workout that is passed to it.
          Disable scrolling for the flatlist since it is in a collapsible list*/}
          <FlatList
            data={goals}
            keyExtractor={(goals) => goals.goalName}
            renderItem={({ item }) => {
              return (
                <Achievment achievement={item} state={state} />
                // <TouchableOpacity
                //   onPress={() => navigation.navigate("Achievement Details")}
                //   style={styles.Achievmentdetails}
                // >
                //   <Text style={styles.Subtext}>{item.goalName}</Text>
                // </TouchableOpacity>
              );
            }}
          />
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#8fd14f",
  },
  Text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "500",
  },
  subtitle: {
    paddingVertical: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
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
  Achievmentdetails: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#12cdd4",
    borderRadius: 7,
    marginRight: 5,
    marginLeft: 5,
  },
  Subtext: {
    textAlign: "left",
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
});

export default AchievementHeader;
