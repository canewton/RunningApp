import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  Animated,
} from "react-native";
import WorkoutListWindow from "../feed/WorkoutListWindow";
import WindowHeader from "../components/WindowHeader";
import { ScrollView } from "react-native-gesture-handler";
import AchievementsWindow from "../feed/AchievementsWindow";
import ProgressWindow from "../feed/ProgressWindow";
import ProfileWindow from "../feed/ProfileWindow";
import ConnectIcon from "../icons/ConnectIcon";

//This screen is the first screen that the user sees
//Get the navigation prop
const HomeScreen = ({ navigation }) => {
  //the scroll value to be animated
  const scrollY = useRef(new Animated.Value(0)).current;
  const distanceFromTop = 120;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  //listen to how far the x is being scrolled
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        //control how often the scroll event is fired while scrolling as a time interval in ms
        //lower number means better accuracy for code that is tracking the scroll position but
        //can lead to scroll performance problems due to the volume of info being managed
        scrollEventThrottle={1}
      >
        {/*Display all the windows that are in the feed folder
        Make all the windows a button that navigates to the corresponding screen */}
        <View style={{ marginBottom: 330 }}></View>
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
        <View style={{ marginBottom: 150 }}></View>
      </ScrollView>

      {/* render the header */}
      <Animated.View
        style={{
          height: scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [230, 130],
            extrapolate: "clamp",
          }),
          width: Dimensions.get("window").width,
          backgroundColor: "#8fd14f",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          position: "absolute",
        }}
      />
      <Animated.Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "800",
          alignSelf: "center",
          position: "absolute",
          top: scrollY.interpolate({
            inputRange: [0, 70],
            outputRange: [70, 0],
            extrapolate: "clamp",
          }),
          opacity: scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
            extrapolate: "clamp",
          }),
        }}
      >
        Hello, User
      </Animated.Text>
      {/* render the connect button */}
      <View style={styles.margin}>
        <Animated.View
          style={[
            styles.circle,
            {
              postiion: "absolute",
              alignSelf: "center",
              top: scrollY.interpolate({
                inputRange: [0, distanceFromTop],
                outputRange: [distanceFromTop, 0],
                extrapolate: "clamp",
              }),
              opacity: scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        />
        <Animated.View
          style={{
            position: "absolute",
            alignSelf: "center",
            justifyContent: "center",
            top: scrollY.interpolate({
              inputRange: [0, distanceFromTop],
              outputRange: [distanceFromTop + 35, 35],
              extrapolate: "clamp",
            }),
            opacity: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          }}
        >
          <ConnectIcon size={100} color="#12cdd4" />
          <Animated.Text
            style={{
              color: "#12cdd4",
              fontSize: 16,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            Connect
          </Animated.Text>
        </Animated.View>
        {/* render the header icon's final state */}
        <View
          style={{
            position: "absolute",
            width: Dimensions.get("window").width,
          }}
        >
          <Animated.View
            style={[
              styles.circleSmall,
              {
                postiion: "absolute",
                alignSelf: "center",
                top: 40,
                opacity: scrollY.interpolate({
                  inputRange: [distanceFromTop, distanceFromTop + 50],
                  outputRange: [0, 1],
                  extrapolate: "clamp",
                }),
              },
            ]}
          />
          <Animated.View
            style={{
              position: "absolute",
              alignSelf: "center",
              top: 45,
              opacity: scrollY.interpolate({
                inputRange: [distanceFromTop, distanceFromTop + 50],
                outputRange: [0, 1],
                extrapolate: "clamp",
              }),
            }}
          >
            <ConnectIcon size={70} color="#12cdd4" />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const circleDiameter = 200;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingBottom: 10,
    marginVertical: 10,
    backgroundColor: "#12cdd4",
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    color: "#8fd14f",
    fontWeight: "bold",
  },
  margin: {
    //marginTop: 30,
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  circle: {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleDiameter / 2,
    //borderWidth: 10,
    //borderColor: "#8fd14f",
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#d0f5f6",
  },
  circleSmall: {
    width: 100,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#d0f5f6",
  },
});

export default HomeScreen;
