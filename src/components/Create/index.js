import React, { useEffect, useState, useContext } from "react";
import CreateBeer from "./CreateBeer";
import { MyBeers } from "../../context/MyBeers";
import { useHistory } from "react-router-dom";
import service from "../../services";

function Create() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { createBeer } = useContext(MyBeers);

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const { data } = await service.get("categories");

    setCategories(data.data);
  }

  function goToHomePage() {
    history.push("/my-beers");
  }

  function submit(values) {
    createBeer(values);
    goToHomePage();
  }

  return <CreateBeer categories={categories} submit={submit} />;
}

export default Create;
