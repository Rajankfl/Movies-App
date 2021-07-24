import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
function Trailer(props) {
  const [key, setKey] = useState("");
  let apiKey1 = "api_key=db245cded8afdda0fbdb6ca7c317e40c";
  let baseUrl1 = `https://api.themoviedb.org/3/movie/${props.index}/videos?`;
  let apiUrl1 = baseUrl1 + apiKey1;
  useEffect(() => {
    async function data1() {
      let fetchingKey = await axios.get(apiUrl1);
      let fetchedKey = fetchingKey.data.results[0];
      if (fetchingKey.data.results.length !== 0) {
        setKey(fetchedKey.key);
      } else {
        setKey(null);
      }
    }
    data1();
  }, [apiUrl1]);
  if (key === null || key.length > 1) {
    return (
      <>
        <Modal
          key1={key}
          index={props.index}
          title={props.title}
          overview={props.overview}
        />
      </>
    );
  } else {
    return null;
  }
}
export default Trailer;
