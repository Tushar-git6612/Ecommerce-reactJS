import React from "react";

export default function Spinner() {
  return (
    <>
      <div
        style={{
          height: "80px",
          marginTop: "250px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="">Wait</span>
        </div>
        {/* <div>Please wait just a second...</div> */}
      </div>
    </>
  );
}
