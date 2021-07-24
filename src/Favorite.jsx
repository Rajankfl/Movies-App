import React from "react";
import Card from "./AjaxCard";
import "./not-found.css";
import { NavLink } from "react-router-dom";
function Favorite() {
  let movies = JSON.parse(localStorage.getItem("favorite"));
  if (movies.length >= 1) {
    return (
      <>
        <Card list={movies} title="Favorite Movies" />
      </>
    );
  } else {
    return (
      <>
        <div className="Not-found">
          <h1>Nothing Found!</h1>
          <p>
            Please Add some Favorite Movies from
            <NavLink to="/">Here</NavLink>
          </p>
        </div>
      </>
    );
  }
}
export default Favorite;
