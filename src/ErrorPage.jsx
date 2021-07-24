import React from "react";
import { NavLink } from "react-router-dom";
import "./not-found.css";
export default function Error() {
  return (
    <>
      <div className="Not-found">
        <h1>Sorry Page Not Found!</h1>
        <p>
          Go Back to <NavLink to="/">HomePage</NavLink>
        </p>
      </div>
    </>
  );
}
