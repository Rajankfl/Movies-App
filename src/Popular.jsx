import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
function Popular() {
  const [popu, setPopu] = useState([]);
  useEffect(() => {
    async function data1() {
      let apiKey = "&api_key=db245cded8afdda0fbdb6ca7c317e40c";
      let baseUrl = "https://api.themoviedb.org/3";
      let genre = "/discover/movie?sort_by=popularity.desc";
      let popuMovie = baseUrl + genre + apiKey;
      let fetchingPopu = await axios.get(popuMovie);
      let fullPopu = fetchingPopu.data;
      setPopu(fullPopu.results);
    }
    data1();
  }, []);
  if (popu.length > 0) {
    return (
      <>
        <Card list={popu} title="Popular Movies" />
      </>
    );
  } else {
    return null;
  }
}
export default Popular;
