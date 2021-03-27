import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

const profileImage = "../../assets/icon.png";
const teamName = "Team";
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

      <View style={styles.imageStyle}>
        <Image source={require('../../assets/icon.png')} style={styles.image}/> 
      </View>
 
      <View style={styles.textStyle}>

        <TouchableOpacity>
          <View>
            <Text style={styles.text}>Change Photo</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textBig}>{profileName}</Text>
        <TouchableOpacity>
          <View >
            <Text style={styles.text}>Edit Profile</Text>
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
    borderRadius:20
  },
  textStyle: {
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
    borderRadius:20
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    fontSize: 10,
    marginLeft: 10,
  },
  textBig: {
    fontSize: 25,
    marginLeft: 10,
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
  imageStyle:{
    alignItems: "center",
    padding: 20,
  }
});

export default SettingsScreen;
