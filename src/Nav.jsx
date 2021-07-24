import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  const [typed, setTyped] = useState();
  function GetData(e) {
    setTyped("search/" + e.target.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Movie App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/favorite">
                  Favorite Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/watch-later">
                  Watch Later
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/watched">
                  Watched Movies
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle disabled"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "gray" }}
                >
                  Movie Genres
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/"
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/"
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      Comedy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/"
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      Drama
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" method="get" action={"/" + typed}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies"
                aria-label="Search"
                onChange={GetData}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
