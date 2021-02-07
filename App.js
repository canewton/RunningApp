import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import WorkoutListScreen from "./src/screens/WorkoutListScreen";
import LongtermProgressScreen from "./src/screens/LongtermProgressScreen";
import AchievementsScreen from "./src/screens/AchievementsScreen";
import WorkoutDetailScreen from "./src/screens/WorkoutDetailScreen";
import { Provider as WorkoutProvider } from "./src/context/WorkoutContext";

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const ProgressStack = createStackNavigator();
const AchievementsScreentack = createStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Workout List" component={WorkoutListScreen} />
      <ListStack.Screen
        name="Workout Details"
        component={WorkoutDetailScreen}
      />
    </ListStack.Navigator>
  );
};

const ProgressStackScreen = () => {
  return (
    <ProgressStack.Navigator>
      <ProgressStack.Screen
        name="Longterm Progress"
        component={LongtermProgressScreen}
      />
    </ProgressStack.Navigator>
  );
};

const AchievementsStackScreen = () => {
  return (
    <AchievementsScreentack.Navigator>
      <AchievementsScreentack.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
      />
    </AchievementsScreentack.Navigator>
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListStackScreen} />
      <Tab.Screen name="Progress" component={ProgressStackScreen} />
      <Tab.Screen name="Achievements" component={AchievementsStackScreen} />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </WorkoutProvider>
  );
};
