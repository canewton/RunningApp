const TenKTotal = (workouts) => {
  //console.log(workouts);
  //var done = false;
  var metersCount = 0;

  for (var i = 0; i < workouts.length; i++) {
    if (workouts[i].distance === "100 meters") {
      metersCount += 100;
    } else if (workouts[i].distance === "200 meters") {
      metersCount += 200;
    } else if (workouts[i].distance === "400 meters") {
      metersCount += 400;
    } else if (workouts[i].distance === "800 meters") {
      metersCount += 800;
    }
    /* if (metersCount >= 1000) {
      done = true;
    } */
  }
  // console.log(metersCount);
  // console.log(done);
  return metersCount;
};

export { TenKTotal };
