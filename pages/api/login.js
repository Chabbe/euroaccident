const axios = require("axios");

export default async function handler(req, res) {
  axios
    .get(
      "https://my-json-server.typicode.com/proactivehealth/work-test-sample/users"
    )
    .then(function (response) {
      //Checks the fetched data if it contains the username provided by the user.
      const exist = response.data.find(
        (user) => user.login == req.body.username
      );

      //I create the statuscodes myself since this request always returns as a status 200 but for this example and login validation that won't be correct.
      if (exist) {
        res.json({ status: 200, user: exist });
      } else {
        res.json({ status: 401, errorMessage: "Användarnamn existerar inte!" });
      }
    })
    .catch(function (error) {
      res.json({ message: error });
    });
}
