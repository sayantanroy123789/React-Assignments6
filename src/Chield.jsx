import React, { useState } from "react";

function Chield() {
  const [state, setState] = useState(false);
  function goDark() {
    setState(!state);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: state ? "black" : "whitesmoke",
      }}
    >
      <div>
        <h1 style={{ color: state ? "white" : "black" }}>Overreacted</h1>
        <div>
          <h3 style={{ color: "salmon" }}>The wealth codebase</h3>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>sunday 4th, 2020, 11 minutes read </i>
            <br /> come waste your time with me.
          </p>
        </div>
        <div>
          <h3 style={{ color: "salmon" }}>Goodbuy, clean code</h3>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>sunday 11th, 2022, 16 minutes read </i>
            <br /> Let clean code guide with you.
          </p>
        </div>
        <div>
          <h3 style={{ color: "salmon" }}>The decade review</h3>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>monday 6th, 2021, 7 minutes read </i>
            <br /> A personal reflection.
          </p>
        </div>
        <div>
          <h3 style={{ color: "salmon" }}>What are the react theam principa</h3>
          <p style={{ color: state ? "white" : "black" }}>
            {" "}
            <i>sunday 8th, 2020, 10 minutes read </i>
            <br />
          </p>
        </div>
      </div>
      <button
        onClick={goDark}
        style={{
          height: "40px",
          width: "120px",
          marginTop: "24px",
          backgroundColor: "salmon",
          color: state ? "white" : "black",
          cursor: "pointer",
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Chield;
