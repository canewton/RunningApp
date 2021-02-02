import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import WorkoutList from './src/screens/WorkoutList';
import LongtermProgress from './src/screens/LongtermProgress';
import Challenges from './src/screens/Challenges';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const ProgressStack = createStackNavigator();
const ChallengeStack = createStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="Workout List"
        component={WorkoutList}
      />
    </ListStack.Navigator>
  );
}

const ProgressStackScreen = () => {
  return (
    <ProgressStack.Navigator>
      <ProgressStack.Screen
        name="Longterm Progress"
        component={LongtermProgress}
      />
    </ProgressStack.Navigator>
  );
}

const ChallengeStackScreen = () => {
  return (
    <ChallengeStack.Navigator>
      <ChallengeStack.Screen
        name="Challenges"
        component={Challenges}
      />
    </ChallengeStack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>{
      <Tab.Navigator>
        <Tab.Screen name="List" component={ListStackScreen} />
        <Tab.Screen name="Progress" component={ProgressStackScreen} />
        <Tab.Screen name="Challenges" component={ChallengeStackScreen} />
      </Tab.Navigator>
    }</NavigationContainer>
  );
}