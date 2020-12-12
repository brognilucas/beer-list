import React, { useContext } from "react";
import List from "./List";
import Container from "@material-ui/core/Container";

import { MyBeers } from "../../context/MyBeers";

const CreatedBeers = () => {
  const { beers } = useContext(MyBeers);

  return (
    <Container fixed>
      <List isPaginated={false} beers={beers} />
    </Container>
  );
};

export default CreatedBeers;
