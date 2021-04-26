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
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation();
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

     
      <Collapsible collapsed={collapsed} align="center">
        <View style={styles.workout}>
          
          <FlatList
            data={goals}
            keyExtractor={(goals) => goals.goalName}
            renderItem={({ item }) => {
              <Achievment title="Run for _ meters in total"/>,
              <Achievment title="Run _ miles in one day"/>
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
