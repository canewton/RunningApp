import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";

profileImage='../../assets/icon.png'
friendNumber='#'
rankNumber='#'
profileName='First Last'

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

      <Text style={styles.header}>{profileName}</Text>

      <TouchableOpacity >
        <View style={styles.text}>
      <Edit Profile />
        </View>
      </TouchableOpacity>,

      <Text style={styles.text}>  - {friendNumber} Friends</Text>
      <Text style={styles.text}>  - Rank {rankNumber}</Text>

    </View>,
  
    <View style={styles.headerStyle}>
      <Text style={styles.title}>Top Runs</Text>
    </View>

     
  );
};


const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: "#008000",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "center",
  },
  header: {
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
      fontSize: 18,
      marginLeft: 10,
  },
});

export default SettingsScreen;

