const {nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const times of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(times.risetime);
    console.log(`Next pass at ${dateTime} for ${times.duration} seconds!`);
  }
});