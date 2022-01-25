import { useState } from "react";
import Login from "../components/login";
import InsuranceDashboard from "../components/InsuranceDashboard";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <>
      {!loginStatus ? (
        <Login
          setLoginStatus={setLoginStatus}
          loginStatus={loginStatus}
          setUserData={setUserData}
        />
      ) : (
        <InsuranceDashboard
          userData={userData}
          setLoginStatus={setLoginStatus}
        />
      )}
    </>
  );
};

export default Home;
