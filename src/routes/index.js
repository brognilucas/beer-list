import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import CreateBeer from "../components/CreateBeer";
import CreatedBeers from "../components/MyBeers";
import { MyBeersProvider } from "../context/MyBeers";
import Menu from "../components/Menu";
import DetailPage from "../components/DetailPage";
function Routing() {
  
  return (
    <MyBeersProvider>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my-beers" component={CreatedBeers} />
          <Route exact path="/create" component={CreateBeer} />
          <Route exact path="/beers/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
    </MyBeersProvider>
  );
}

export default Routing;
