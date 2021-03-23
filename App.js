import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WorkoutListScreen from "./src/screens/WorkoutListScreen";
import LongtermProgressScreen from "./src/screens/LongtermProgressScreen";
import AchievementsScreen from "./src/screens/AchievementsScreen";
import WorkoutDetailScreen from "./src/screens/WorkoutDetailScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { Provider as WorkoutProvider } from "./src/context/WorkoutContext";
import HomeScreen from "./src/screens/HomeScreen";
import WorkoutRankingsScreen from "./src/screens/WorkoutRankingsScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//create a stack navigator for navigating between screens
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

//edit the default theme to customize the background color and header color
const Theme = {
  dark: false,
  colors: {
    //make the back button white
    primary: "rgb(255,255,255)",
    //make the background color white
    background: "rgb(242, 242, 242)",
    //make the header color green
    card: "#8fd14f",
    //make the header text white
    text: "rgb(255,255,255)",
  },
};

//Make a function that references the workouts screen with a tabs at the top of the screen
//disable swipe for the tabs and make them blue
function WorkoutsScreen() {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBarOptions={{ style: { backgroundColor: "#12cdd4" } }}
    >
      <Tab.Screen name="Recent" component={WorkoutListScreen} />
      <Tab.Screen name="Rankings" component={WorkoutRankingsScreen} />
    </Tab.Navigator>
  );
}

//Define which screens can be navigated to
//Make the home screen the first screen that the user sees
function RunningAppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        /* options={{ headerShown: false }} */
      />
      <Stack.Screen name="Workouts" component={WorkoutsScreen} />
      <Stack.Screen name="Workout Details" component={WorkoutDetailScreen} />
      <Stack.Screen name="Progress" component={LongtermProgressScreen} />
      <Stack.Screen name="Achievements" component={AchievementsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    //Wrap the stack navigator with WorkoutProvider, making the stack be passed
    //to WorkoutProvider as a prop
    //This makes useContext(WorkoutProvider) work later on
    //Also, wrap the stack with a navigation container, needed for navigating
    //between screens to work. Make the theme the custom theme defined above
    <WorkoutProvider>
      <NavigationContainer theme={Theme}>
        <RunningAppStack />
      </NavigationContainer>
    </WorkoutProvider>
  );
};
