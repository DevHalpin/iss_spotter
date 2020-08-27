const {fetchMyIP, fetchCoordsByIP } = require('./iss');

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