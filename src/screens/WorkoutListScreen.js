import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import CollapsibleSingle from "../components/CollapsableSingle";

const WorkoutListScreen = ({ navigation }) => {
  const { state, addWorkout } = useContext(WorkoutContext);

  //const { colors } = useTheme();

  return (
    <View>
      <CollapsibleSingle title="100 meters" children="00:10.43" />
      <CollapsibleSingle title="200 meters" children="00:21.68" />
      <CollapsibleSingle title="400 meters" children="00:28.32" />
      <CollapsibleSingle title="800 meters" children="00:51.66" />
      <FlatList
        data={state}
        keyExtractor={(workout) => workout.id}
        renderItem={({ item }) => {
          // return (
          //   <TouchableOpacity>
          //     <View style={styles.workout}>
          //       <Text style={styles.time}>{item.data}</Text>
          //       <Text style={styles.date}>{item.date}</Text>
          //     </View>
          //   </TouchableOpacity>
          // )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  workout: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    backgroundColor: "#f38375",
  },
  date: {
    fontSize: 12,
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  distanceView: {
    paddingVertical: 8,
    backgroundColor: "#EF6351",
    alignItems: "center",
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
});

export default WorkoutListScreen;
