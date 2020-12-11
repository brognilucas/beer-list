import React, { useEffect, useState, useRef, useContext } from "react";
import List from "./List";
import Container from "@material-ui/core/Container";
import LoadingBar from "react-top-loading-bar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import services from "../services";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import { MyBeers } from "../context/MyBeers";
import { useHistory } from "react-router-dom";

const CreatedBeers = () => {
  const [beers] = useContext(MyBeers);

  return (
    <Container fixed>
      <List isPaginated={false} beers={beers} />
    </Container>
  );
};

export default CreatedBeers;
