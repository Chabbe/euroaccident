import { useState } from "react";
import Login from "../components/login";
import InsuranceDashboard from "../components/InsuranceDashboard";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  console.log(loginStatus);
  return (
    <>
      {!loginStatus ? (
        <Login loginStatus={setLoginStatus} abc={loginStatus} />
      ) : (
        <InsuranceDashboard />
      )}
    </>
  );
};

export default Home;
