import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/List/Home";
import CreatedBeers from "../components/List/MyBeers";
import { MyBeersProvider } from "../context/MyBeers";
import Menu from "../components/Menu";
import DetailPage from "../components/BeerDetail/DetailPage";
import Create from "../components/Create";
function Routing() {
  return (
    <MyBeersProvider>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my-beers" component={CreatedBeers} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/beers/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
    </MyBeersProvider>
  );
}

export default Routing;
