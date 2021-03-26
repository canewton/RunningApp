import React, { useState } from "react";

const sortForLongTermScreen = ({}) => {


    

    //State is currently an array wrapped in an object.
  //Create workouts which contains the array of workouts, not wrapped in an object.
  const workouts = Object.values(state)[0];
  //Get the most recent workout which is always at the end of the array
  const mostRecentWorkout = workouts[workouts.length - 1];
  //Get the date of the most recent workout
  const mostRecentWorkoutDate = mostRecentWorkout.date;


  this.props.navigation.navigate('Test', {
    data: this.state.data
  });

  
  //sudo code for now
  //ergeh
  //1. get all seven of the most recent seven workouts from other page?!!! (NOT WORKING)
  // sort by date
  //3. run the MAX of array code on each workout
  //4. port into the graph stoopid, (what else would we do with it?)



}