// require and run the main fetch function

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('24.84.42.226', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked!  Returned coordinates: ", coordinates);
// });

const myCoords = { latitude: 49.0743308, longitude: -122.5593218 };

fetchISSFlyOverTimes(myCoords, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log("It worked! Fly over times are:", flyOverTimes);
});