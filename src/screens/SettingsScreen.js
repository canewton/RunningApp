import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const profileImage = "../../assets/icon.png";
const teamName = "team";
const friendNumber = "#";
const rankNumber = "#";
const profileName = "First Last";
const hundredMeterTime = "00:00:00";
const twoHundredMeterTime = "00:00:00";
const threeHundredMeterTime = "00:00:00";
const twoHundredMeterDay = "mm/dd/yy";
const hundredMeterDay = "mm/dd/yy";
const threeHundredMeterDay = "mm/dd/yy";

const SettingsScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);

  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View>
        {/* <Image source={require(profileImage)}/> */}
        <TouchableOpacity>
          <View style={styles.text}>
            <Text>Change Photo</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textBig}>{profileName}</Text>
        <TouchableOpacity>
          <View style={styles.text}>
            <Text>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.blueStyle}>
        <Text style={styles.title}> Team: {teamName} </Text>
        <Text style={styles.title}> - {friendNumber} Friends</Text>
        <Text style={styles.title}> - Rank {rankNumber}</Text>
      </View>

      <View style={styles.headerStyle}>
        <Text style={styles.title}>Top Runs</Text>
      </View>

      <View style={styles.blueStyle}>
        <Text style={styles.smallTitle}>
          {" "}
          100 meter: {hundredMeterTime} {hundredMeterDay}{" "}
        </Text>

        <Text style={styles.smallTitle}>
          {" "}
          200 meter: {twoHundredMeterTime} {twoHundredMeterDay}
        </Text>

        <Text style={styles.smallTitle}>
          {" "}
          300 meter: {threeHundredMeterTime} {threeHundredMeterDay}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#008000",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "center",
  },
  blueStyle: {
    backgroundColor: "#12cdd4",
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    marginLeft: 10,
  },
  textBig: {
    fontSize: 20,
    marginLeft: 10,
  },
  smallTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default SettingsScreen;
