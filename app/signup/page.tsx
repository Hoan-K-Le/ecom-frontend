"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
interface FormDataProps {
  username: string;
  password: string;
  email: string;
}

function Signup() {
  const [formData, setFormData] = useState<FormDataProps>({
    username: "",
    password: "",
    email: "",
  });
  const router = useRouter();

  const signUp = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:8000/signup",
        data: {
          email: formData.email,
          password: formData.password,
          username: formData.username,
        },
      });
      setFormData(prev => ({ ...prev, username: "", password: "", email: "" }));
      if (data) {
        router.push("/login");
      }
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="bg-[#d2d2d2] p-4 flex flex-col gap-4 rounded-xl">
        <p className="text-4xl text-center">Sign Up</p>
        <input
          type="text"
          placeholder="Username.."
          className="rounded p-2"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email.."
          className="rounded p-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password.."
          className="rounded p-2"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={signUp} className="w-full bg-green-300 p-1 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
