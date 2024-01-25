"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  // const [user, setUser] = useState([]);
  const [username, setUsername] = useState("123");
  const [password, setPassword] = useState("123");
  const [email, setEmail] = useState("test1222223@yahoo.com");
  const signUp = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:8000/signup",
        data: {
          email: email,
          password: password,
          username: username,
        },
      });
      console.log(data, "data 20 frontend");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello</h1>
      <button onClick={signUp}>Sign Up</button>
    </main>
  );
}
