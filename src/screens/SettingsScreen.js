import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import { Ionicons } from "@expo/vector-icons";
import EditProfileScreen from "../screens/EditProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import TopRunsFilter from "../components/TopRunsFilter";
import Collapsible from "react-native-collapsible";
import TotalDistance from "../components/TotalDistance";
import TotalTime from "../components/TotalTime";


const profileImage = "../../assets/icon.png";
const teamName = "Ballard";
const friendNumber = "5";
const rankNumber = "3";
const hundredMeterTime = "00:00:00";
const twoHundredMeterTime = "00:00:00";
const threeHundredMeterTime = "00:00:00";
const twoHundredMeterDay = "mm/dd/yy";
const hundredMeterDay = "mm/dd/yy";
const threeHundredMeterDay = "mm/dd/yy";
const totalDistance = "3240";
const totalTime = "1h 20min 23";

//const navigator=createStackNavigator(
//{

//  }
//)
const windowWidth = Dimensions.get("window").width;

const SettingsScreen = (props) => {
  //green color: #8fd14f
  //blue color: #12cdd4
  const { state } = useContext(WorkoutContext);
  const [profileName, setProfileName] = useState("First Last");
  const [teamName, setTeamName] = useState("Ballard");
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

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
        <TouchableOpacity
        onPress={toggleExpanded}
        >
          <View>
            <Text style={styles.text}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Collapsible collapsed={collapsed} align="center">
        <Text>Name:</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={profileName}
          onChangeText={(newValue) => setProfileName(newValue)}
        />
        <Text>Team:</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={teamName}
          onChangeText={(newValue) => setTeamName(newValue)}
        />
        <TouchableOpacity>
          <View style={styles.blueStyle}>
            <Text style={styles.white}>Add friends</Text>
          </View>
        </TouchableOpacity>
      </Collapsible>

      {/*<TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={teamName}
        onChangeText={(newValue) => setTeamName(newValue)}
      />*/}
      <View style={styles.greyStyle}>
        <Text style={styles.title}>Team: {teamName} </Text>
        <Text style={styles.title}>Friends: {friendNumber}</Text>
        <Text style={styles.title}>Rank: {rankNumber}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.grayStyle}>
          <Text style={styles.title}>Top Runs</Text>
          <TopRunsFilter state={state} />
          
        </View>
        <View style={styles.Column}>
          <View style={styles.grayStyle}>
            <Text style={styles.smallTitle}> TOTAL DISTANCE</Text>
            <TotalDistance state={state}/>
            <TouchableOpacity style={styles.blueStyle}>
              <Text style={styles.white}>Compare</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.grayStyle}>
            <Text style={styles.smallTitle}> TOTAL TIME</Text>
            <TotalTime state={state}/>            <TouchableOpacity style={styles.blueStyle}>
              <Text style={styles.white}>Compare</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "white",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
  },
  greyStyle: {
    backgroundColor: "grey",
    paddingVertical: 10,
    alignItems: "center",
    margin: 20,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#8fd14f",
    borderWidth: 5,
    
  },
  blueStyle: {
    backgroundColor: "#12cdd4",
    paddingVertical: 0,
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#12cdd4",
  },
  textStyle: {
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    color: "#12cdd4",
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
    color: "#12cdd4",
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
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  Column: {
    flexDirection: "column",
    
  },
  row: {
    flexDirection: "row",
  },
  white: {
    color: "white",
    fontWeight: "bold",
  },
  grayStyle: {
    backgroundColor: "grey",
    paddingVertical: 10,
    alignItems: "center",
    margin: 20,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#8fd14f",
    borderWidth: 5,
    width:300
  },
});

export default SettingsScreen;
