import React, { useActionState, useState } from "react";

const Login = ({ handleLogin }) => {
  // two way binding
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const submitHandler = (e) => {
    // to stop page reloading
    e.preventDefault(e);
    // console.log("email is",email)
    // console.log("password is:",password)
    handleLogin(email, password);
    SetEmail("");
    SetPassword("");
  };

  return (
    <div className="flex  h-screen w-screen items-center justify-center ">
      <div className="border-2 border-red-500 p-5 py-20 rounded-3xl">
        <h1 className="text-2xl mb-20 font-bold text-red-500">Login_in</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              // console.log(e.target.value)
              SetEmail(e.target.value);
            }}
            type="email"
            className="border-2 text-white border-red-500 outline-none rounded-lg px-1 my-1"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            type="password"
            className="border-2 text-white  border-red-500 outline-none rounded-lg px-1 my-1"
            placeholder="Enter password"
            required
          />
          <button className="text-white bg-red-600 rounded-2xl px-3 py-1 hover:bg-red-700 my-1">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
