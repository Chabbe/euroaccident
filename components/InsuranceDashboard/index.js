import axios from "axios";

const MyPages = () => {
  //   axios
  //     .post("/api/login", {
  //       username: username,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       //   window.location.href = "/login";
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  return (
    <div className="mx-auto h-[100vh] flex flex-col justify-center font-libre">
      <div
        className="bg-white py-[50px] px-[50px] w-3/4 md:w-3/4 lg:w-1/2 mx-auto rounded-[22px]"
        style={{
          boxShadow: "5px 8px 25px 10px rgba(0,0,0,0.3)",
        }}
      ></div>
    </div>
  );
};

export default MyPages;
