"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logIn } from "@/store/getUser";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store";
function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useAppSelector(state => state.userData.userData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogIn = () => {
    dispatch(logIn({ email: userData.email, password: userData.password }));
    router.push("/");
  };

  console.log(userInfo, "userInfo");
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
        <button
          onClick={handleLogIn}
          className="w-full bg-green-300 p-1 rounded"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
