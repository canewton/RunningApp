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

const Achievment = ({goals}) => {
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("Achievement Details")}
        //style={styles.Achievmentdetails}
        >
        <Text /* style={styles.Subtext}*/ >{}</Text>
        </TouchableOpacity>
    )
}

export default Achievment;
