import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Menu() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => { 

  }, [history])

  function create() {
    history.push("/create");
  }

  console.log({ history });

  return (
    <Box className={classes.content}>
      <ButtonGroup variant="text" aria-label="text primary button group">
        <Button
          onClick={() => history.push("/my-beers")}
          color={
            history.location.pathname === "/my-beers" ? "primary" : "inherit"
          }
        >
          My Beers
        </Button>
        <Button
          onClick={() => history.push("/")}
          color={history.location.pathname === "/" ? "primary" : "inherit"}
        >
          Other's Beers
        </Button>
      </ButtonGroup>

      <Button onClick={create}>
        <CreateIcon />
        Create Own Beer
      </Button>
    </Box>
  );
}
