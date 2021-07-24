import React from "react";
import Card from "./AjaxCard";
import { NavLink } from "react-router-dom";
import "./not-found.css";
function Watched() {
  let watched = JSON.parse(localStorage.getItem("watched"));
  if (watched.length >= 1) {
    return (
      <>
        <Card list={watched} title="Watched Movies" />
      </>
    );
  } else {
    return (
      <>
        <div className="Not-found">
          <h1>Nothing Found!</h1>
          <p>
            Please Add some Watched Movies from
            <NavLink to="/">Here</NavLink>
          </p>
        </div>
      </>
    );
  }
}
export default Watched;
