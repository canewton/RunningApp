import React, { Component, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Collapsible from "react-native-collapsible";

const WorkoutList = ({ title, children, navigation }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="center">
        <View style={styles.workoutList}>
          <FlatList
            data={children}
            keyExtractor={(index) => index.id}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View style={styles.workout}>
                    <Text style={styles.time}>{item.data}</Text>
                    <Text style={styles.date}>{item.date}</Text>
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
  workout2: {
    paddingVertical: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: "red",
    borderColor: "white",
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
