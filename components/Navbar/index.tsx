"use client";
import React from "react";
import { cart } from "../svg";
import Link from "next/link";
import axios from "axios";

function Navbar() {
  const logOutHandler = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:8000/logout",
        withCredentials: true,
      });
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="flex justify-between text-2xl">
      <div className="flex gap-4 items-center w-1/3">
        <Link href="/">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Contact</Link>
      </div>

      <div className="w-1/3">
        <p className="font-bold text-3xl">Hoan's Site</p>
      </div>
      <div className="flex items-center gap-4 ">
        <button onClick={logOutHandler}>Log out</button>
        <Link href="/signup">Sign Up</Link>
        <Link href="#">{cart()}</Link>
      </div>
    </nav>
  );
}

export default Navbar;
