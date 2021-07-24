import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "./Card";
import "./not-found.css";
function Search() {
  let name1 = useParams();
  let name = name1.name;
  let searchedQuery =
    "https://api.themoviedb.org/3/search/movie?query=" +
    name +
    "&api_key=db245cded8afdda0fbdb6ca7c317e40c";
  console.log(searchedQuery);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function data1() {
      let apiData = await axios.get(searchedQuery);
      let fetched = apiData.data;
      setData(fetched.results);
    }
    data1();
  }, [searchedQuery]);
  if (data.length >= 1) {
    return (
      <>
        <Card list={data} title={"Search Results: " + name} />
      </>
    );
  } else {
    return (
      <>
        <div className="Not-found">
          <h1>
            Sorry Nothing Found on Search{" "}
            <span style={{ color: "blue", textDecoration: "underline" }}>
              {name}
            </span>
          </h1>
        </div>
      </>
    );
  }
}
export default Search;
