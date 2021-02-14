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
import { ScrollView } from "react-native-gesture-handler";

const WorkoutListScreen = ({ navigation }) => {
  const { state, addWorkout } = useContext(WorkoutContext);

  //const { colors } = useTheme();

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CollapsibleSingle title="100 meters" children={state} />
        {/* <CollapsibleSingle title="200 meters" children="00:21.68" />
      <CollapsibleSingle title="400 meters" children="00:28.32" />
      <CollapsibleSingle title="800 meters" children="00:51.66" /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WorkoutListScreen;
