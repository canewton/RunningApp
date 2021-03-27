import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Context as WorkoutContext } from "../context/WorkoutContext";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";

//import { test } from "../components/sortForLongTermScreen";

const LongtermProgressScreen = () => {
  // const hard_data_one  = Object.values(state)[workouts.length - 1];
  // let  hard_data_two  = Object.values(state)[workouts.length - 2];
  // let  hard_data_three  = Object.values(state)[workouts.length - 3];
  // let hard_data_four  = Object.values(state)[workouts.length - 4];
  // let  hard_data_five  = Object.values(state)[workouts.length - 5];
  // let  hard_data_six  = Object.values(state)[workouts.length - 7];
  // let  hard_data_seven  = Object.values(state)[workouts.length - 8];
  //commented out beacuse doesn't work?!?!?!?!?!

  //green color: #8fd14f
  //blue color: #12cdd4

  //sudo code for now
  //1. get all seven of the most recent seven workouts from other page?!!! (NOT WORKING)
  //2. run the MAX of array code on each workout
  //3. port into the graph stoopid, (what else would we do with it?)

  //dummy data for proof of concept.

  //const { distance, data, date,hard_data }  = [Object.values(state)[workouts.length - 1]];
  //needs to look like this ^^^ ?!?!?!

  //100 meter data

  // super();

  // this.state={

  //   TextInput_Data : ''

  // }

  // ONE=()=>{

  //     Alert.alert("ONE");

  //   }

  //   TWO=()=>{

  //     Alert.alert("TWO");

  //   }

  //   THREE=()=>{

  //     Alert.alert("THREE");

  //   }

  //   FOUR=()=>{

  //     Alert.alert("FOUR");

  //   }

  //   checkSwitch=(param)=>{

  //     switch(param) {

  //       case '1':
  //         this.ONE();
  //         break;

  //       case '2':
  //         this.TWO();
  //         break;

  //       case '3':
  //         this.THREE();
  //         break;

  //       case '4':
  //         this.FOUR();
  //         break;

  //       default:
  //         Alert.alert("NUMBER NOT FOUND");

  //       }

  //   }
  //this.checkSwitch.bind(this, this.state.TextInput_Data)

  /*  checkSwitch=(screen_counter)=>{

  */

  //   const test = this.props.navigation.getParam('test', 'some default value');

  const [screen_counter, setCounter] = useState(0);
  // //1 = 100 meters
  // //2 = 200 meters
  // 3 = 400 meters
  // 4 = 800 meters
  // 5 1600 meters
  //yde

  let [lastSeven, yee] = useState(0);

  lastSeven = {
    labels: [
      "Feb 14",
      "Feb 16",
      "Feb 28",
      "Mar 10",
      "Mar 18",
      "Mar 20",
      "Mar 26",
    ], //filler, shall add real stuff later,
    datasets: [
      {
        data: [9.13, 9.1, 9.2, 9.1, 9.07, 9.05, 9.1],
        // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      },
    ],
    //legend: ["your last seven runs"] // optional
  };

  const lastThirty = {
    labels: [], //filler, shall add real stuff later,
    datasets: [
      {
        data: [
          10.8,
          10.82,
          10.79,
          10.63,
          10.36,
          10.3,
          10.2,
          10.22,
          10.13,
          10.19,
          10.2,
          10.1,
          10.07,
          10.05,
          10.1,
          9.8,
          9.82,
          9.79,
          9.63,
          9.36,
          9.3,
          9.2,
          9.22,
          9.13,
          9.19,
          9.2,
          9.1,
          9.07,
          9.05,
          9.1,
        ],
        // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      },
    ],
    //legend: ["your last seven runs"] // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const bleh = [34, 32, 29, 30, 32, 34, 35];

  const bestrun = Math.max.apply(Math, bleh);

  //Math.max.apply(Math, (hard_data_one) )
  //[].reduce((a, b) => a + b, 0)

  const screenWidth = Dimensions.get("window").width;

  //only use 100-800

  //times and such
  //how fast you completed the runs
  //all times
  return (
    <ScrollView>
      <View>
        {/* <View buttonSwitch>
      <TouchableOpacity
        style={styles.buttonhighlight}
        onPress={() => {
          setCounter('1');  
      }} >
      
      <Text style={styles.buttontext}>100 meters</Text>
      
      </TouchableOpacity><TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCounter('2');  
      }} >
      
      <Text style={styles.buttontext} >200 meters</Text>
      
      </TouchableOpacity><TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCounter('3');  
      }} >
      
      <Text style={styles.buttontext} >400 meters</Text>
      
      </TouchableOpacity><TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCounter('4');  
      }} > */}
        {/*       
      <Text style={styles.buttontext} >800 meters</Text>
      
      </TouchableOpacity>
  
    </View>
       */}
        {/* <Text> {test}</Text> */}

        <View style={styles.headerBlue}>
          <Text style={styles.title}>Last 7 Runs</Text>
        </View>
        <BarChart
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          data={lastSeven}
          width={screenWidth - 20}
          height={256}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={0}
        />

        <View style={styles.headerBlue}>
          <Text style={styles.title}>Last 30 Runs</Text>
        </View>
        <BarChart
          style={{
            marginVertical: 2,
            borderRadius: 5,
          }}
          data={lastThirty}
          width={screenWidth - 20}
          height={256}
          yAxisLabel=""
          chartConfig={chartConfig2}
          verticalLabelRotation={0}
        />
      </View>

      <Text style={styles.text}>
        Your Best time is: <Text style={styles.greenText}>00:09.05</Text>
      </Text>

      <Text style={styles.text}>
        {" "}
        A chart of your times, for you last seven sprints. currenly showing your{" "}
        <Text style={styles.greenText}>100</Text> meter runs
      </Text>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: "rgb(242, 242, 242)",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "rgb(242, 242, 242)",
  backgroundGradientToOpacity: 0.1,
  color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  // strokeWidth: 2.5, // optional, default 3
  // barPercentage: 0.6,
  // useShadowColorFromDataset: true, // optional
  fillShadowGradientOpacity: 0.5,
  fillShadowGradient: "rgb(0,0,0)",
};

const chartConfig2 = {
  backgroundGradientFrom: "rgb(242, 242, 242)",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "rgb(242, 242, 242)",
  backgroundGradientToOpacity: 0.1,
  color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  // strokeWidth: 2.5, // optional, default 3
  // barPercentage: 0.6,
  // useShadowColorFromDataset: true, // optional
  fillShadowGradientOpacity: 0.5,
  fillShadowGradient: "rgb(0,0,0)",
  strokeWidth: 2,
  barPercentage: 0.2,
};
//sgs
const render_chart = {};

const styles = StyleSheet.create({
  headerBlue: {
    backgroundColor: "#12cdd4",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "center",
  },
  buttonSwitch: {
    alignItems: "center",
  },
  headerGreen: {
    backgroundColor: "#008000",
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
    fontSize: 20,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    fontSize: 20,
    // backgroundColor: "#BFCABE",
    // padding: 13,
    // fontSize: 30,
    // marginHorizontal: 25,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#00BCD4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
  },
  buttontext: {
    fontSize: 30,
  },
  greenText: {
    color: "green",
    fontSize: 24,
    marginLeft: 10,
  },
  buttonhighlight: {
    alignItems: "center",
    fontSize: 20,
    // backgroundColor: "#BFCABE",
    // padding: 13,
    // fontSize: 30,
    // marginHorizontal: 25,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#27C4BA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default LongtermProgressScreen;
