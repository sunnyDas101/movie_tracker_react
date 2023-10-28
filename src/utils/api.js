import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2E4Y2M2ODUxZmE1NjcxZTg0MmY4NTU2ZTBjMDRmYSIsInN1YiI6IjY1M2E5Nzc0YWUzNjY4MDBmZjViN2M3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPtNd0TiHFH4ydVIlCf6qO7xHj86zYoJyYh5AT2FBag"

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
