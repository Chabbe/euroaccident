const axios = require("axios");

export default async function handler(req, res) {
  console.log(req.body.username);
  axios
    .get(
      "https://my-json-server.typicode.com/proactivehealth/work-test-sample/users"
    )
    .then(function (response) {
      const exist = response.data.find(
        (user) => user.login == req.body.username
      );

      //We create the statuscodes myself since this request always returns as a status 200 but for this example and login validation that won't be correct.
      if (exist) {
        res.json({ status: 200, user: exist });
      } else {
        res.json({ status: 401 });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
