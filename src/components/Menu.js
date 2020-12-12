import React from "react";
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

  function create() {
    history.push("/create");
  }

  function listMyOwnBeers() {
    history.push("/my-beers");
  }

  function listOthersBeers() {
    history.push("/");
  }

  return (
    <Box className={classes.content}>
      <ButtonGroup variant="text" aria-label="text primary button group">
        <Button id="my-beers-btn" onClick={listMyOwnBeers}>
          My Beers
        </Button>
        <Button id="other-beers-btn" onClick={listOthersBeers}>
          Other's Beers
        </Button>
      </ButtonGroup>

      <Button id="create-btn" onClick={create}>
        <CreateIcon />
        Create Own Beer
      </Button>
    </Box>
  );
}
