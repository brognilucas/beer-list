import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardMedia, Container, Box } from "@material-ui/core";

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
    width: theme.spacing(20),
    height: theme.spacing(20),
    justifyContent: "center",
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
    [theme.breakpoints.up("md")]: {
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
    textAlign: "left",
  },
  text: {
    textAlign: "justify",
    fontSize: 14,
  },
}));

function DetailBeer({ beer }) {
  const classes = useStyles();

  if (!beer) {
    return <div id="not-found">Beer not found </div>;
  }

  function getIngredients({ ingredients }) {
    let ingredientsArr = [];
    Object.keys(ingredients).map((key) => {
      for (let ingredient of ingredients[key]) {
        ingredientsArr.push(ingredient.name);
      }
    });

    return ingredientsArr.toString();
  }

  return (
    <Container>
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
          <Box id="beer-info">
            <Typography align="left" variant="h5">
              {beer.name}
            </Typography>
            <Typography
              style={{ marginTop: "1em" }}
              variant="subtitle1"
              className={classes.text}
            >
              {" "}
              {beer.description || "No Description Found "}
            </Typography>
          </Box>
          <Box id="style-info">
            <Typography style={{ marginTop: "1em" }} variant="h6">
              Style
            </Typography>

            <Typography align="left" variant="subtitle1">
              Style: {beer.style?.name || "Style not informed"}
            </Typography>
            {beer.style?.shortName && (
              <Typography align="left" variant="subtitle1">
                Style short name: {beer.style?.shortName}
              </Typography>
            )}
            <Typography
              style={{ marginTop: "1em" }}
              variant="subtitle1"
              className={classes.text}
            >
              {beer?.style?.description || "No Description of Style Found "}
            </Typography>
          </Box>
          <Box id="category-info">
            <Typography style={{ marginTop: "1em" }} variant="h6">
              Category
            </Typography>
            <Typography variant="subtitle2">
              {beer.style?.category?.name || "Category not informed"}
            </Typography>
          </Box>
          <Box id="additional-info">
            <Typography style={{ marginTop: "1em" }} variant="h6">
              Additional Info
            </Typography>

            {beer.year && (
              <Typography variant="subtitle2">
                Vintage in {beer.year}
              </Typography>
            )}

            {beer.isOrganic && (
              <Typography
                variant="subtitle1"
                className={classes.text}
                style={{ marginTop: "1em" }}
              >
                Organic: {beer.isOrganic === "N" ? "No" : "Yes"}
              </Typography>
            )}
            {beer.isRetired && (
              <Typography className={classes.text} style={{ marginTop: "1em" }}>
                Still being produced: {beer.isRetired === "N" ? "Yes" : "No"}
              </Typography>
            )}
          </Box>
          {beer.ingredients && (
            <Box  id="ingredients-info">
              <Typography style={{ marginTop: "1em" }} variant="h6">
                Ingredients
              </Typography>
              <Typography> {getIngredients(beer)} </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default DetailBeer;
