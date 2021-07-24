import React from "react";
import background from "./noimage.jpg";
export default function Card(props) {
  let imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className="container">
        <p className="h1 mt-2">{props.title}</p>
      </div>
      <div className="content">
        {props.list.map((val, index) => {
          return (
            <React.Fragment key={val.id}>
              <a className="card1" href="#!" key={val.id}>
                <div
                  className="front"
                  style={{
                    backgroundImage: `url(${
                      val.poster_path !== null
                        ? imgUrl + val.poster_path
                        : background
                    })`
                  }}
                ></div>
                <div className="back">
                  <div id="overflow">
                    <p id="head1">{val.original_title}</p>
                    <p>{val.overview}</p>
                  </div>
                  <button className="button1">Watch Trailer</button>
                </div>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
