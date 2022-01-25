const axios = require("axios");

export default async function handler(req, res) {
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

  axios
    .get(
      "https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances"
    )
    .then(function (response) {
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
