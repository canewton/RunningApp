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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const ProgressStack = createStackNavigator();
const AchievementsScreentack = createStackNavigator();

const Theme = {
  dark: false,
  colors: {
    primary: "#B8B8FF",
    background: "#FFEEDD",
    card: "#9381FF",
    text: "rgb(28, 28, 30)",
    border: "#B8B8FF",
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

function BottomTabs() {
  return (
    <Tab.Navigator>
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
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <WorkoutProvider>
      <NavigationContainer theme={Theme}>
        <BottomTabs />
      </NavigationContainer>
    </WorkoutProvider>
  );
};
