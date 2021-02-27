import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";


const Acheivement = (props) => {
    return <View>
        <Text>{props.title}</Text>
        {/* <FlatList
            keyExtractor={(goals) => goals.title}
            data = {goals}
            renderItem={({ item }) => {
            <Text>
                {item.title}: {item.requirements}
            </Text>
            }}
        /> */}
    </View>
}

//const StyleSheet=style.create({})


export default Acheivement;