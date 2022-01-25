import axios from "axios";
import { useEffect, useState } from "react";
import UserInsurances from "./UserInsurances";

const MyPages = ({ userData, setLoginStatus }) => {
  const [insurances, setInsurances] = useState([]);
  useEffect(() => {
    fetchUserInsurances();
  }, [userData]);
  //Call to next-api to retrieve current users insurances
  const fetchUserInsurances = (async) => {
    axios
      .post("/api/getUserInsurances", {
        userId: userData.id,
      })
      .then(function (response) {
        setInsurances(response.data.insurances);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //"Logsout" by changing the loginStatus state.
  const logout = () => {
    setLoginStatus(false);
  };

  return (
    <div className="mx-auto flex flex-col justify-center font-libre">
      <div className="grid w-[90vw] md:w-[85vw] lg:w-[75vw] grid-cols-1 gap-y-4 bg-white py-[10px] md:py-[25px] lg:py-[50px] px-[10px] md:px-[25px] lg:px-[50px] mx-auto rounded-[22px]">
        <div className="flex flex-row justify-between py-3">
          <h1 className="mb-3 text-[18px] md:text-[22px]">{userData.name}</h1>
          <button
            className="rounded-[22px] bg-pink-brand py-2 px-7 text-white text-[16px] md:text-[20px] lg:text-[24px]"
            onClick={logout}
          >
            Logga ut
          </button>
        </div>
        {insurances.length === 0 && (
          <div className="mx-auto">
            <img src="ripple.gif" />
          </div>
        )}
        {insurances.length > 0 &&
          insurances?.map((insurance, i) => {
            return <UserInsurances key={i} insurance={insurance} />;
          })}
      </div>
    </div>
  );
};

export default MyPages;
