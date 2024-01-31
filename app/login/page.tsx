import React from "react";

function Login() {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="bg-[#d2d2d2] p-4 flex flex-col gap-4 rounded-xl">
        <p className="text-4xl text-center">Log in</p>
        <input
          type="text"
          placeholder="Username.."
          className="rounded p-2"
          name="username"
        />
        <input
          type="text"
          placeholder="Email.."
          className="rounded p-2"
          name="email"
        />
        <input
          type="password"
          placeholder="Password.."
          className="rounded p-2"
          name="password"
        />
        <button className="w-full bg-green-300 p-1 rounded">Log In</button>
      </div>
    </div>
  );
}

export default Login;
