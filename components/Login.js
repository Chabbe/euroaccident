import axios from "axios";
import { useState } from "react";

const Login = ({ loginStatus, abc }) => {
  const [username, setUsername] = useState("");
  console.log(abc);
  console.log(loginStatus);
  const handleSubmit = async (e) => {
    if (!loginStatus) {
      axios
        .post("/api/login", {
          username: username,
        })
        .then(function (response) {
          console.log(response);

          //Checks status from request returns 200 or 401.
          if (response.data.status === 200) {
            console.log("Succesful login!");
            setloginStatus(true);
          } else {
            // setloginStatus(false);
            console.log("Wrong");
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      //If login is successful, prevent further login attempts.
    }
  };

  return (
    <div className="mx-auto h-[100vh] flex flex-col justify-center font-libre">
      <div
        className="bg-white py-[20px] lg:py-[50px] px-[20px] lg:px-[50px] w-3/4 md:w-3/4 lg:w-1/2 mx-auto rounded-[22px]"
        style={{
          boxShadow: "5px 8px 25px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h2 className="mb-4 text-[22px] md:text-[28px] lg:text-[33px]">
          Logga in med ditt användarnamn
        </h2>
        <input
          type="text"
          placeholder="Ange ditt användarnamn"
          className="rounded-[11px] w-full block border-2 border-solid py-1 lg:py-4 pl-4 mb-4 border-gray-300 focus:outline-none focus-within:border-pink-brand placeholder:font-libre"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          className="rounded-[22px] bg-pink-brand py-2 px-7 text-white text-[16px] md:text-[20px] lg:text-[24px]"
          onClick={handleSubmit}
        >
          Logga in
        </button>
      </div>
    </div>
  );
};

export default Login;
