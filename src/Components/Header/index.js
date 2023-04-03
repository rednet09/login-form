import React from "react";

const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "lightcyan",
          width: "100%",
        }}
      >
        <div
          style={{ fontSize: "2rem", paddingTop: "1rem", color: "lightgray" }}
        >
          Logo
        </div>
        <div style={{ display: "flex", gap: "2rem", color: "lightGrey" }}>
          <h1>Home </h1>
          <h1>About Us</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
