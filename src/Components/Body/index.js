import React from "react";

const Body = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <input type="text" value="Email" placeholder="Enter your email"></input>
        <input
          type="password"
          value="Password"
          placeholder="Enter your password"
        ></input>
      </div>
    </>
  );
};

export default Body;
