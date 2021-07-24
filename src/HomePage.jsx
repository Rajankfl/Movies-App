import React from "react";
import Theatre from "./Theatre";
import Popular from "./Popular";
function Home() {
  if (!localStorage.getItem("watched")) {
    localStorage.setItem("watched", JSON.stringify([]));
  }
  if (!localStorage.getItem("watch-later")) {
    localStorage.setItem("watch-later", JSON.stringify([]));
  }
  if (!localStorage.getItem("favorite")) {
    localStorage.setItem("favorite", JSON.stringify([]));
  }
  return (
    <>
      <Popular />
      <Theatre />
    </>
  );
}
export default Home;
