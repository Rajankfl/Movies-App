import React from "react";
import Trailer from "./TrailerFetch";
import Icons from "./Icons";
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
              <Trailer
                index={val.id}
                title={val.original_title}
                overview={val.overview}
              />
              <div className="card1">
                <div
                  className="front"
                  style={{
                    backgroundImage: `url(${val.poster_path !== null
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
                  <button
                    type="button"
                    className="button1"
                    data-bs-toggle="modal"
                    data-bs-target={"#examplemodal" + val.id}
                  >
                    Watch Trailer
                  </button>
                  <div className="action">
                    <div className="icons">
                      <Icons val={val} />
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
