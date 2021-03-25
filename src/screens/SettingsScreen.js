import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

profileImage='../../assets/icon.png'
friendNumber='#'
rankNumber='#'
profileName='First Last'
hundredMeterTime= '00:00:00'
twoHundredMeterTime= '00:00:00'
threeHundredMeterTime= '00:00:00'
twoHundredMeterDay='mm/dd/yy'
hundredMeterDay='mm/dd/yy'
threeHundredMeterDay='mm/dd/yy'

const SettingsScreen = () => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);

  return (
    <View style={styles.headerStyle}>
      <Text style={styles.title}>Profile</Text>
    </View>,

    <View >
      <Image source={require(profileImage)}/>

      <TouchableOpacity >
        <View style={styles.text}>
      <Change Photo />
        </View>
      </TouchableOpacity>,

      <Text style={styles.textBig}>{profileName}</Text>

      <TouchableOpacity >
        <View style={styles.text}>
      <Edit Profile />
        </View>
      </TouchableOpacity>,

      
    </View>,

    <View style={styles.blueStyle}>
       <Text style={styles.title}>  Team: {teamName} </Text>,
       <Text style={styles.title}>  - {friendNumber} Friends</Text>,
       <Text style={styles.title}>  - Rank {rankNumber}</Text>,
    </View> ,

    <View style={styles.headerStyle}>
      <Text style={styles.title}>Top Runs</Text>
    </View>,

    <View style={styles.blueStyle}>
       <Text style={styles.smallTitle}>  100 meter: {hundredMeterTime} {hundredMeterDay} </Text>,
       <Text style={styles.smallTitle}>  200 meter: {twoHundredMeterTime} {twoHundredMeterDay}</Text>,
       <Text style={styles.smallTitle}>  300 meter: {threeHundredMeterTime} {threeHundredMeterDay}</Text>,
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
      flexDirection: "row",
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
