// require and run the main fetch function

const { nextISSTimesForMyLocation } = require('./iss');

// API CALL 1
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// API CALL 2
// fetchCoordsByIP('24.84.42.226', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked!  Returned coordinates: ", coordinates);
// });

// API CALL 3
// const myCoords = { latitude: 49.0743308, longitude: -122.5593218 };
// fetchISSFlyOverTimes(myCoords, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log("It worked! Fly over times are:", flyOverTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

module.exports = { printPassTimes };