const RunMiles = ( workouts ) => {

  //var done = false;
  var miles = 1;
  var metersCount = 0;
  
  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].distance === "100 meters") {
      metersCount += 100;
    }
    else if (workouts[i].distance === "200 meters") {
      metersCount += 200;
    }
    else if (workouts[i].distance === "400 meters") {
      metersCount += 400;
    }
    else if (workouts[i].distance === "800 meters") {
      metersCount += 800;
    }
    //console.log(metersCount)
    if (metersCount >= 1609) {
      miles += 1;
      metersCount = (metersCount-1609);
    }
    /*
    if (miles >= 3) {
      done = true;
    }
    */
  }
  // console.log(miles)
  // console.log(done)
  return (
    miles
  )
};

export default { RunMiles };
