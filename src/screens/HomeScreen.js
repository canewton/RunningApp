import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import WorkoutListWindow from "../feed/WorkoutListWindow";
import WindowHeader from "../components/WindowHeader";
import ConnectButton from "../components/ConnectButton";
import { ScrollView } from "react-native-gesture-handler";
import AchievementsWindow from "../feed/AchievementsWindow";
import ProgressWindow from "../feed/ProgressWindow";
import ProfileWindow from "../feed/ProfileWindow";

//This screen is the first screen that the user sees
//Get the navigation prop
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ConnectButton />
        {/*Display all the windows that are in the feed folder
      Make all the windows a button that navigates to the corresponding screen */}
        <TouchableOpacity onPress={() => navigation.navigate("Workouts")}>
          <View style={styles.button}>
            <WorkoutListWindow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Achievements")}>
          <View style={styles.button}>
            <AchievementsWindow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
          <View style={styles.button}>
            <ProgressWindow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={styles.button}>
            <ProfileWindow />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingBottom: 10,
    marginVertical: 10,
    backgroundColor: "#12cdd4",
  },
});

export default HomeScreen;
