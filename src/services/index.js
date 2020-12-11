import axios from "axios";

const API = "/api";

async function get(path, pagination = {}) {
  const { REACT_APP_KEY: key } = process.env;
  return axios.get(`${API}/${path}`, {
    params: {
      key,
      ...getPaginationParams(pagination),
      withIngredients: "Y",
      withBreweries: "Y",
      withSocialAccounts: "Y"
    },
  
  });
}

function getPaginationParams(pagination) {
  return {
    p: pagination.currentPage,
  };
}

export default {
  get,
};
