import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import BeerListItem from "./BeerListItem";
import { Link } from "react-router-dom";

import { Button, Container } from "@material-ui/core";

export default function BeerList({
  isPaginated = true,
  beers,
  pagination,
  loadMore,
  loading,
}) {
  if (!beers.length && !loading) {
    return (
      <Typography align="center" variant="subtitle2">
        No beers found
      </Typography>
    );
  } else if (!beers.length && loading) { 
    return ( 
      <Typography align="center" variant="subtitle2">
        Loading...
      </Typography>
    )
  }

  return (
    <List>
      {beers.map((beer) => (
        <ListItem aria-label='beer-item' key={beer.id}>
          <BeerListItem beer={beer} />
        </ListItem>
      ))}

      {isPaginated &&
      beers.length &&
      pagination.currentPage < pagination.numberOfPages &&
      !loading ? (
        <Container>
          <Button onClick={loadMore} variant="contained">
            Load More
          </Button>
        </Container>
      ) : null}
    </List>
  );
}
