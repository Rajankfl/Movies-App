import React from "react";
import Card from "./AjaxCard";
import { NavLink } from "react-router-dom";
import "./not-found.css";
function Later() {
  let movies = JSON.parse(localStorage.getItem("watch-later"));
  if (movies.length >= 1) {
    return (
      <>
        <Card list={movies} title="Movies On WatchList" />
      </>
    );
  } else {
    return (
      <>
        <div className="Not-found">
          <h1>Nothing Found!</h1>
          <p>
            Please Add some Movies To WatchList from
            <NavLink to="/">Here</NavLink>
          </p>
        </div>
      </>
    );
  }
}
export default Later;
