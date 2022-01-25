import axios from "axios";
import { useState } from "react";

const Login = ({ loginStatus, setLoginStatus, setUserData }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    if (!loginStatus) {
      axios
        .post("/api/login", {
          username: username,
        })
        .then(function (response) {
          //Checks status from request returns 200 or 401.
          if (response.data.status === 200) {
            //loginStatus makes the dashboard render and display the insurances of the customer.
            setUserData(response.data.user);
            setLoginStatus(true);
            setUsernameError(false);
          } else {
            setLoginStatus(false);
            //Will make the error message from backend display for the user.
            setUsernameError(true);
            setErrorMessage(response.data.errorMessage);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="mx-auto h-[100vh] flex flex-col justify-center font-libre">
        <div
          className="bg-white py-[20px] w-[90vw] md:w-[85vw] lg:w-[75vw] lg:py-[50px] px-[20px] lg:px-[50px] mx-auto rounded-[22px]"
          style={{
            boxShadow: "5px 8px 25px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h2 className="font-bold mb-3 text-[20px] md:text-[26px] lg:text-[30px]">
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
        {usernameError && (
          <div className="mt-3 mx-auto bg-red-500 text-red-200 w-[90vw] md:w-[85vw] lg:w-[75vw] text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
