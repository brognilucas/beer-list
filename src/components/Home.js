import React, { useEffect, useState, useRef, useContext } from "react";
import List from "./List";
import Container from "@material-ui/core/Container";
import LoadingBar from "react-top-loading-bar";
import services from "../services";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({
    beers: [],
    pagination: {
      currentPage: 1,
      numberOfPages: null,
      totalResults: null,
    },
  });

  const loaderRef = useRef(null);

  const [loading, setLoading] = useState(false);

  async function getBeers() {
    setLoading(true);
    try {
      const { data } = await services.get("beers", state.pagination);

      const { data: beers, ...pagination } = data;

      setState({
        beers: [...state.beers, ...beers],
        pagination,
      });
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBeers();
  }, []);

  useEffect(() => {
    getBeers();
  }, [state.pagination.currentPage]);

  useEffect(() => {
    if (loading) {
      loaderRef.current.continuousStart(10, 20);
    } else {
      loaderRef.current.complete();
    }
  }, [loading]);

  function loadMoreBeers() {
    setState({
      ...state,
      pagination: {
        ...state.pagination,
        currentPage: state.pagination.currentPage + 1,
      },
    });
  }

  return (
    <React.Fragment>
      <LoadingBar color={"#2F52E0"} ref={loaderRef} />
      <Container fixed>
        <List
          loading={loading}
          loadMore={loadMoreBeers}
          pagination={state.pagination}
          beers={state.beers}
        />
      </Container>
    </React.Fragment>
  );
};

export default Home;
