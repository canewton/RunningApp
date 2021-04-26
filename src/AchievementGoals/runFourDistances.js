const RunFourDistances = (workouts) => {

  var done = false;
  var runOneHundred = false;
  var runTwoHundred = false;
  var runFourHundred = false;
  var runEightHundred = false;
  var counter = 0;

  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].distance === "400 meters") {
      if(!runFourHundred){
        counter += 1;
      }
      runFourHundred = true;
    } else if (workouts[i].distance === "200 meters") {
      if(!runTwoHundred){
        counter += 1;
      }
      runTwoHundred = true;
    } else if (workouts[i].distance === "100 meters") {
      if(!runOneHundred){
        counter += 1;
      }
      runOneHundred = true;
    } else if (workouts[i].distance === "800 meters") {
      if(!runEightHundred){
        counter += 1;
      }
      runEightHundred = true;
    }

    // if (runOneHundred && runTwoHundred && runFourHundred && runEightHundred) {
    //   done = true;
    // }
  }
  //console.log(done);
  return counter;
};

export { RunFourDistances };
