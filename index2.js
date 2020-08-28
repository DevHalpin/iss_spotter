const {nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  for (times of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(times.risetime);
    console.log(`Next pass at ${dateTime} for ${times.duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('It didn\'t work: ', error.message);
  });