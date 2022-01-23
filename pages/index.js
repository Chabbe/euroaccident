import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loginStatus, setloginStatus] = useState(false);

  const handleSubmit = async (e) => {
    console.log(username);
    e.preventDefault();

    if (!loginStatus) {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (res.status === 200) {
        //If login is successful, prevent further login attempts.
        // setloginStatus(true);
        console.log(res);
      }
    }
  };

  return (
    <div className="mx-auto h-[100vh] flex flex-col justify-center font-libre">
      <div className="bg-white py-[50px] px-[50px] w-3/4 md:w-3/4 lg:w-1/2 mx-auto rounded-[22px]">
        <h2 className="mb-4 text-[33px]">Logga in med ditt användarnamn</h2>
        <input
          type="text"
          placeholder="Ange ditt användarnamn"
          className="rounded-[11px] w-full block border-2 border-solid py-4 pl-4 mb-4 border-gray-300 focus:outline-none focus-within:border-pink-brand placeholder:font-libre"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          className="rounded-[22px] bg-pink-brand py-2 px-7 text-white text-[24px]"
          onClick={handleSubmit}
        >
          Logga in
        </button>
      </div>
    </div>
  );
}
