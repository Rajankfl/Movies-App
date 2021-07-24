import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
function Theatre() {
  const [theatre, setTheatre] = useState([]);
  let apiKey = "&api_key=db245cded8afdda0fbdb6ca7c317e40c";
  let baseUrl = "https://api.themoviedb.org/3";
  let genre =
    "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
  let theatreMovie = baseUrl + genre + apiKey;
  useEffect(() => {
    async function data1() {
      let fetchingTheatre = await axios.get(theatreMovie);
      let fullTheatre = fetchingTheatre.data;
      setTheatre(fullTheatre.results);
    }
    data1();
  }, [theatreMovie]);
  if (theatre.length !== 0) {
    return (
      <>
        <Card list={theatre} title="Movies On Theatre" />
      </>
    );
  } else {
    return null;
  }
}
export default Theatre;
