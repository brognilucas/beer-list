import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardMedia, Container, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  img: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  info: {
    display: "flex",
    position: "relative",
  },
  content: {
    backgroundColor: "#FFF",
    borderWidth: "1 em",
    marginVertical: "5 em",
    border: "1px solid #cacaca",
    borderRadius: "10px",
  },
  beerName: {
    textAlign: "center",
  },
  imgBeer: {
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  imgBeerName: {
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  beerInfo: {
    display: "flex",
    flexDirection: "column",
  },
  summary: {
    textAlign: "justify",
    fontSize: 14,
  },
}));


function BeerListItem({ beer }) {
  const classes = useStyles();
  return (
    <Container className={classes.content}>
      <Box className={classes.root}>
        <Box className={classes.imgBeer}>
          <CardMedia
            className={classes.img}
            image={
              beer.labels?.large ||
              beer?.labels?.icon ||
              "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
            }
            title={beer.name}
          />
        </Box>
        <Box className={classes.beerInfo}>
          <Typography
            component={Link}
            to={`/beers/detail/${beer.id}`}
            variant="subtitle1"
          >
            {beer.name}
          </Typography>
          <Typography variant="subtitle2">
            Category: {beer.style?.category?.name}
          </Typography>

          <Typography variant="subtitle2">
            Style: {beer?.style?.name || "No Style Informed"}
          </Typography>
          <Typography variant="subtitle1" className={classes.summary}>
            {" "}
            {beer.description ||
              beer?.style?.description ||
              "No Description Found "}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default BeerListItem;
