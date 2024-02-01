"use client";
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const LogIn = async () => {
    const { email, password } = userData;
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:8000/login",
      data: {
        email: email,
        password: password,
      },
    });
    return data;
  };

  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="bg-[#d2d2d2] p-4 flex flex-col gap-4 rounded-xl">
        <p className="text-4xl text-center">Log in</p>
        <input
          type="text"
          placeholder="Email.."
          className="rounded p-2"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password.."
          className="rounded p-2"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button onClick={LogIn} className="w-full bg-green-300 p-1 rounded">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
