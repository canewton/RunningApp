import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";

const Achievment = ({ achievement }) => {
  const navigation = useNavigation();
  //console.log(achievement);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Achievement Details", {
          goalName: achievement.goalName,
        })
      }
      //style={styles.Achievmentdetails}
    >
      <Text /* style={styles.Subtext}*/>{achievement.goalName}</Text>
    </TouchableOpacity>
  );
};

export default Achievment;
3;
