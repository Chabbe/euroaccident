const axios = require("axios");

export default async function handler(req, res) {
  console.log(req.body.username);

  axios
    .get(
      "https://my-json-server.typicode.com/proactivehealth/work-test-sample/users"
    )
    .then(function (response) {
      response.data.map((user) => {
        if (user.login === req.body.username) {
          res.send();
        }
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
