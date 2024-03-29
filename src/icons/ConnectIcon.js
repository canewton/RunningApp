import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
  require("../selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const ConnectIcon = ({ size, color }) => {
  // Load the icon font before using it
  const [fontsLoaded] = useFonts({
    IcoMoon: require("../resources/fonts/icomoon.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Icon name="ConnectIcon" size={size} color={color} />
    </View>
  );
};
export default ConnectIcon;
