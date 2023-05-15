// contain most of the logic for fetching the data from each api endpoint

const request = require('request');

// api call 1
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  const url = 'https://api.ipify.org?format=json';
  request(url, (error, response, body) => {
    if (error) {
      console.log(error, null);
    } else {
      const data = JSON.parse(body);
      console.log(data);
    }
  })
}

module.exports = { fetchMyIP };