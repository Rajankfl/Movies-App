import React from "react";
export default function Icons(props) {
  let getFavorite = JSON.parse(localStorage.getItem("favorite"));
  let isThereFavorite = getFavorite.some((data) => {
    return data.id === props.val.id;
  });
  let getWatchLater = JSON.parse(localStorage.getItem("watch-later"));
  let isThereLater = getWatchLater.some((data) => {
    return data.id === props.val.id;
  });

  let getWatched = JSON.parse(localStorage.getItem("watched"));
  let isThereWatched = getWatched.some((data) => {
    return data.id === props.val.id;
  });
  return (
    <>
      <i
        className={isThereFavorite === true ? "bi bi-star-fill" : "bi bi-star"}
        style={{
          color: isThereFavorite === true ? "black" : "blueviolet"
        }}
        onClick={(e) => {
          let getFavorite = JSON.parse(localStorage.getItem("favorite"));
          let isThereFavorite = getFavorite.some((data) => {
            return data.id === props.val.id;
          });
          if (isThereFavorite === true) {
            e.target.setAttribute("class", "bi bi-star");
            e.target.setAttribute("style", "color:blueviolet");
            let newMovies = getFavorite.filter((movies) => {
              return movies.id !== props.val.id;
            });
            localStorage.setItem("favorite", JSON.stringify(newMovies));
          } else {
            getFavorite.push(props.val);
            localStorage.setItem("favorite", JSON.stringify(getFavorite));
            e.target.setAttribute("class", "bi bi-star-fill");
            e.target.setAttribute("style", "color:black");
          }
        }}
      ></i>

      <i
        className={
          isThereLater === true
            ? "bi bi-bookmark-plus-fill"
            : "bi bi-bookmark-plus"
        }
        style={{
          color: isThereLater === true ? "black" : "blueviolet"
        }}
        onClick={(e) => {
          let getWatchLater = JSON.parse(localStorage.getItem("watch-later"));
          let isThereLater = getWatchLater.some((data) => {
            return data.id === props.val.id;
          });
          if (isThereLater === true) {
            e.target.setAttribute("class", "bi bi-bookmark-plus");
            e.target.setAttribute("style", "color:blueviolet");
            let newMovies = getWatchLater.filter((movies) => {
              return movies.id !== props.val.id;
            });
            localStorage.setItem("watch-later", JSON.stringify(newMovies));
          } else {
            getWatchLater.push(props.val);
            localStorage.setItem("watch-later", JSON.stringify(getWatchLater));
            e.target.setAttribute("class", "bi bi-bookmark-plus-fill");
            e.target.setAttribute("style", "color:black");
          }
        }}
      ></i>
      <i
        className={
          isThereWatched === true ? "bi bi-eye-fill" : "bi bi-eye-slash"
        }
        style={{
          color: isThereWatched === true ? "black" : "blueviolet"
        }}
        onClick={(e) => {
          let getWatched = JSON.parse(localStorage.getItem("watched"));
          let isThereWatched = getWatched.some((data) => {
            return data.id === props.val.id;
          });
          if (isThereWatched === true) {
            e.target.setAttribute("class", "bi bi-eye-slash");
            e.target.setAttribute("style", "color:blueviolet");
            let newMovies = getWatched.filter((movies) => {
              return movies.id !== props.val.id;
            });
            localStorage.setItem("watched", JSON.stringify(newMovies));
          } else {
            getWatched.push(props.val);
            localStorage.setItem("watched", JSON.stringify(getWatched));
            e.target.setAttribute("class", "bi bi-eye-fill");
            e.target.setAttribute("style", "color:black");
          }
        }}
      ></i>
      <i className="bi bi-share"></i>
    </>
  );
}
