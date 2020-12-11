import React, { useEffect, useState, useContext, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { useParams } from "react-router-dom";
import { MyBeers } from "../context/MyBeers";
import services from "../services";
import DetailBeer from "./Detail";

const DetailPage = () => {
  const [beers] = useContext(MyBeers);
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  let { id } = useParams();

  async function getBeerApi() {
    return services.get(`/beer/${id}`);
  }

  async function getBeer() {
    setLoading(true);
    let beer = beers.find((beer) => beer.id === id);
    if (!beer) {
      try {
        const { data } = await getBeerApi();
        beer = data.data;
      } catch (error) {
        beer = null;
      }
    }
    setBeer(beer);

    setLoading(false);
  }
  
  useEffect(() => {
    if (loading) {
      loaderRef.current.continuousStart(10, 20);
    } else {
      loaderRef.current.complete();
    }
  }, [loading]);

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <>
      <LoadingBar color={"#2F52E0"} ref={loaderRef} />

      {loading ? <div> Wait... </div> : <DetailBeer beer={beer} />}
    </>
  );
};

export default DetailPage;
