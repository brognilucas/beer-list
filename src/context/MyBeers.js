import React, { useState, useContext, useEffect } from "react";

function getRandomId() {
  return Math.random().toString(36).substr(0, 5);
}

const MyBeers = React.createContext([{}, () => {}]);

const MyBeersProvider = (props) => {
  const [beers, setBeers] = useState([]);

  function getBeerById(id) {
    return beers.find((beer) => beer.id === id);
  }

  function createBeer(beer) {
    Object.assign(beer, {
      id: getRandomId(),
    });

    setBeers([...beers, beer]);

    return beer;
  }

  return (
    <MyBeers.Provider value={{ createBeer, beers, getBeerById }}>
      {props.children}
    </MyBeers.Provider>
  );
};

export { MyBeers, MyBeersProvider, getRandomId };
