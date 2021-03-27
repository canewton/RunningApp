import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import { Ionicons } from "@expo/vector-icons";

const profileImage = "../../assets/icon.png";
const teamName = "Ballard";
const friendNumber = "5";
const rankNumber = "3";
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
      {/* <View style={styles.headerStyle}>
        <Text style={styles.title}>Profile</Text>
      </View> */}

      {/* <View style={styles.imageStyle}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
      </View> */}
      <View style={{ alignItems: "center", marginLeft: 10 }}>
        <Ionicons name="person-circle-sharp" size={200} color="#caccce" />
      </View>
      <View style={styles.textStyle}>
        <TouchableOpacity>
          <View>
            <Text style={styles.text}>Change Photo</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textBig}>{profileName}</Text>
        <TouchableOpacity>
          <View>
            <Text style={styles.text}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.blueStyle}>
        <Text style={styles.title}>Team: {teamName} </Text>
        <Text style={styles.title}>Friends: {friendNumber}</Text>
        <Text style={styles.title}>Rank: {rankNumber}</Text>
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
    backgroundColor: "#8fd14f",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
  },
  blueStyle: {
    backgroundColor: "#12cdd4",
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
    borderRadius: 20,
  },
  textStyle: {
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    fontSize: 10,
  },
  textBig: {
    fontSize: 25,
  },
  smallTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageStyle: {
    alignItems: "center",
    padding: 20,
  },
});

export default SettingsScreen;
