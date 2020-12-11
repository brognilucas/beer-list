import React, { useState, useContext, useEffect } from "react";



function getRandomId(){ 
  return Math.random().toString(36).substr(0, 5); 
}

const MyBeers = React.createContext([{}, () => {}]);
const MyBeersProvider = (props) => {
  const [beers, setBeers] = useState([]);

  return (
    <MyBeers.Provider value={[beers, setBeers]}>
      {props.children}
    </MyBeers.Provider>
  );
};

export { MyBeers, MyBeersProvider, getRandomId };
