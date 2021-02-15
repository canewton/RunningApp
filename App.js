import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import WorkoutListScreen from "./src/screens/WorkoutListScreen";
import LongtermProgressScreen from "./src/screens/LongtermProgressScreen";
import AchievementsScreen from "./src/screens/AchievementsScreen";
import WorkoutDetailScreen from "./src/screens/WorkoutDetailScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { Provider as WorkoutProvider } from "./src/context/WorkoutContext";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const ProgressStack = createStackNavigator();
const AchievementsScreentack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Theme = {
  dark: false,
  colors: {
    primary: "#8fd14f",
    background: "rgb(255, 255, 255)",
    card: "#8fd14f",
    text: "rgb(28, 28, 30)",
    border: "rgb(28, 28, 30)",
    notification: "rgb(255, 69, 58)",
  },
};

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Workouts" component={WorkoutListScreen} />
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
        name="Progress"
        component={LongtermProgressScreen}
      />
    </ProgressStack.Navigator>
  );
};

const AchievementsStackScreen = () => {
  return (
    <AchievementsScreentack.Navigator>
      <AchievementsScreentack.Screen
        name="Achievements"
        component={AchievementsScreen}
      />
    </AchievementsScreentack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator tabBarOptions={customTabBarStyle}>
      <Tab.Screen
        name="Workouts"
        component={ListStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Achievements"
        component={AchievementsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const customTabBarStyle = {
  activeTintColor: "#0091EA",
  inactiveTintColor: "gray",
  style: {
    borderTopWidth: 0,
    borderTopColor: "transparent",
    backgroundColor: "white",
    elevation: 0,
    indicatorStyle: {
      width: 0,
      height: 0,
      elevation: 0,
    },
  },
};

export default () => {
  return (
    <WorkoutProvider>
      <NavigationContainer theme={Theme}>
        <BottomTabs />
      </NavigationContainer>
    </WorkoutProvider>
  );
};
