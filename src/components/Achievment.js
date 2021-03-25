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

const Achievment = ({achievement}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("Achievement Details"), {goalName:achievement.goalName}}
        style={styles.Achievmentdetails}
        >
        <Text style={styles.Subtext} >{achievement.goalName}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    title: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      borderRadius: 5,
      paddingVertical: 18,
      paddingHorizontal: 10,
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "gray",
      backgroundColor: "#8fd14f",
    },
    Text: {
      textAlign: "left",
      fontSize: 30,
      color: "white",
      fontWeight: "500",
    },
    subtitle: {
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
    icons: 
    { flexDirection: 'row', 
    alignItems: 'center',
     },
  });
export default Achievment;
