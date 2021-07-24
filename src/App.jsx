import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Home from "./HomePage";
import Favorite from "./Favorite";
import Later from "./WatchLater";
import Search from "./Search";
import Watched from "./Watched";
import Nav from "./Nav";
import Error from "./ErrorPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={Favorite} />
          <Route exact path="/watch-later" component={Later} />
          <Route exact path="/search/:name" component={Search} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/Movies" component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
