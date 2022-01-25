const axios = require("axios");

export default async function handler(req, res) {
  //Gets the insurance ID's and then returns the ID's for the correct userID.
  const insuranceIds = await axios
    .get(
      "https://my-json-server.typicode.com/proactivehealth/work-test-sample/user_insurances"
    )
    .then(function (response) {
      return response.data[req.body.userId];
    })
    .catch(function (error) {
      console.log(error);
    });
  //Fetches all insurances and finds current users insurances.
  axios
    .get(
      "https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances"
    )
    .then(function (response) {
      //Loop through the insurance ID's from user and see if we can match it with ID's of
      //the insurance. If its a match I push it to the array which I then send back to the
      //client
      let insurances = [];
      insuranceIds.forEach((id) => {
        const insuranceType = response.data.find(
          (insurance) => insurance.id === id
        );
        if (insuranceType) {
          insurances.push(insuranceType);
        }
      });
      res.json({ insurances: insurances });
    })
    .catch(function (error) {
      console.log(error);
    });
}
