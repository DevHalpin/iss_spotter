const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\it work!' , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('172.218.221.28',(error, data) => {
//   console.log('Error: ', error);
//   console.log('Data : ', data);
// })

// fetchISSFlyOverTimes({latitude: 49.31670, longitude: -122.73840},(error, data) => {
//     if (error) {
//     console.log('It didn\it work!' , error);
//     return;
//   }

//   console.log('It worked! Returned viewing times: ' , data);
// })