import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import { Ionicons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import { colors, icons } from "../icons/ProfileIcons";
import { Feather } from "@expo/vector-icons";

const IconSelection = (props) => {
  const [icon, setIcon] = useState(icons(30, "white")[0]);
  console.log(props.iconName);
  // return (
  //   <View>
  //     <Text>Choose your Icon:</Text>
  //     <FlatList
  //       data={icons(30, "black")}
  //       keyExtractor={(index) => index.id + ""}
  //       numColumns={colorColumns}
  //       scrollEnabled={false}
  //       renderItem={({ item }) => {
  //         return (
  //           <TouchableOpacity
  //             //if this icon is pressed, set the state to this icon so that
  //             //it can be used to change the values of classes context later
  //             onPress={() => {
  //               setIcon(item.icon);
  //             }}
  //           >
  //             <View
  //               style={
  //                 //if this icon is the one that the user chooses, make it have an opacity of 1
  //                 //if this icon is not the one that the user chooses, make it have an opacity of .25
  //                 icon.props.name === item.icon.props.name
  //                   ? [
  //                       styles.color,
  //                       {
  //                         backgroundColor: backgroundColor,
  //                         borderColor: borderColor,
  //                       },
  //                     ]
  //                   : [
  //                       styles.color,
  //                       {
  //                         backgroundColor: backgroundColor,
  //                         borderColor: borderColor,
  //                         opacity: 0.25,
  //                       },
  //                     ]
  //               }
  //             >
  //               {/* render the icon */}
  //               {item.icon}
  //             </View>
  //           </TouchableOpacity>
  //         );
  //       }}
  //     />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    marginTop: 15,
    fontSize: 40,
    borderColor: "black",
    marginBottom: 15,
    borderBottomWidth: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 180,
    borderRadius: 50,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default IconSelection;
