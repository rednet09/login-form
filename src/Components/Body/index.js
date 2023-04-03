import React from "react";
import { useEffect } from "react";
// learn use effect
const [Email, setEmail] = useEffect("") =>{
};

const [Password, setPassword] = useEffect("");
const btnClick = (e) => {e.target.Email(setEmail)
    e.target.Password(setPassword)
  console.log("email: ", Email);
  console.log("password: ", Password);
};

const Body = () => {
  return (
    <>
      <div style={{ paddingTop: "4rem" }}>
        <h1>Login</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "3rem",
        }}
      >
        <input
          type="text"
          value={Email}
          placeholder="Enter your email"
          style={{ fontSize: "2rem" }}
        ></input>
        <input
          type="password"
          value={Password}
          placeholder="Enter your password"
          style={{ fontSize: "2rem" }}
        ></input>
        <button
          style={{ borderRadius: "5rem", padding: "0.5rem" }}
          onChange={btnClick()}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Body;
