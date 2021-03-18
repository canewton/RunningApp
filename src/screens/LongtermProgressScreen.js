import React, { useContext, useState, } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
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

const LongtermProgressScreen = () => {


 
  const { state } = useContext(WorkoutContext);
  const workouts = Object.values(state)[0];
  


console.log(workouts[0]);

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


  let  [hard_data_one, setCounter_one] = useState([0,0]);
  let  [hard_data_two, setCounter_two] = useState([0,0]);
  let  [hard_data_three, setCounter_three] = useState([0,0]);
  let  [hard_data_four, setCounter_four] = useState([0,0]);
  let  [hard_data_five, setCounter_five] = useState([0,0]);
  let  [hard_data_six, setCounter_six] = useState([0,0]);
  let  [hard_data_seven, setCounter_seven] = useState([0,0]);

  // super();

  // this.state={
 
  //   TextInput_Data : ''

  // }



  ONE=()=>{
   
      Alert.alert("ONE");
   
    }
   
    TWO=()=>{
   
      Alert.alert("TWO");
   
    }
   
    THREE=()=>{
   
      Alert.alert("THREE");
   
    }
   
    FOUR=()=>{
   
      Alert.alert("FOUR");
   
    }


    checkSwitch=(param)=>{
 
      switch(param) {
   
        case '1':
          this.ONE();
          break;
        
        case '2':
          this.TWO();
          break;
   
        case '3':
          this.THREE();
          break;
   
        case '4':
          this.FOUR();
          break;
   
        default:
          Alert.alert("NUMBER NOT FOUND");
      
        }
   
    }
//this.checkSwitch.bind(this, this.state.TextInput_Data)

/*  checkSwitch=(screen_counter)=>{

switch (screen_counter ) {

  case 1:
  // hard_data_one  = [49.31,49.36,49.38,49.85,50.36,500.86,51.35,51.86,52.4,52.87,53.34,53.8];
  // hard_data_two  = [49.31,49.36,49.38,49.85,50.36,500.86,51.35,51.86,52.4,52.87,53.34,53.8];
  // hard_data_three  = [49.31,49.36,49.38,49.85,5000.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8];
  // hard_data_four  = [49.31,49.36,490.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8];
  // hard_data_five  = [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8];
  // hard_data_six  = [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8];
  // hard_data_seven = [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8];
  setCounter_one ([49.31,49.36,49.38,49.85,50.36,500.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  setCounter_two ([49.31,49.36,49.38,49.85,50.36,500.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  setCounter_three ([49.31,49.36,49.38,49.85,5000.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  setCounter_four ([49.31,49.36,490.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  setCounter_five ([49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  setCounter_six ([49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  setCounter_seven ([49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8]);
  break;

}
  }
  

  */
const[screen_counter, setCounter] = useState(0);
//1 = 100 meters
//2 = 200 meters
//3 = 400 meters
//4 = 800 meters
//5 1600 meters
//


  let [lastSeven, yee] = useState(0)

  lastSeven = {
    labels: [0,0,0,0,0,0,0,0,], //filler, shall add real stuff later,
    datasets: [
      {
        data: [
          Math.max.apply(Math, (hard_data_one) ),
          Math.max.apply(Math, (hard_data_two) ),
          Math.max.apply(Math, (hard_data_three) ),
          Math.max.apply(Math, (hard_data_four) ),
          Math.max.apply(Math, (hard_data_five) ),
          Math.max.apply(Math, (hard_data_six) ),
          Math.max.apply(Math, (hard_data_seven) ),
        ],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["your last seven runs"] // optional
    
    
  };

  //Math.max.apply(Math, (hard_data_one) )
//[].reduce((a, b) => a + b, 0)







  //times and such
  //how fast you completed the runs
  //all times
  return (
    <ScrollView>
    <View>
      <View style={styles.headerGreen}>
        <Text style={styles.title}>LongtermProggress</Text>
      </View>
      <View buttonSwitch>
      <Button title="100 meters" 
        onPress={() => {
            setCounter('1');
        }} />
        <Button title="200 meters" 
        onPress={() => {
            setCounter('2');
        }} />
        <Button title="400 meters" 
        onPress={() => {
            setCounter('3');
        }} />
        <Button title="800 meters" 
        onPress={() => {
            setCounter('4');
        }} />
        <Button title="1600 meters" 
        onPress={() => {
            setCounter('5');
        }} />


      </View>
      <Text> {screen_counter}</Text>
      <Text> {hard_data_one}</Text>

      <View style={styles.headerBlue}>
        <Text style={styles.title}>100 meters</Text>
      </View>
      <LineChart
          data={lastSeven}
          width={300}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          withDots={(false)}
        />

      

      </View>
      </ScrollView>
  );


};

const chartConfig = {
  backgroundGradientFrom: "#FFFFF1",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFF1",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: true // optional
};

const render_chart = {

}



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
    fontSize: 18,
    marginLeft: 10,
  },
});



export default LongtermProgressScreen;
