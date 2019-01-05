import { API_KEY } from "./secret";
export const FETCH_RESULT = "FETCH_RESULT";
import axios from "axios";

export function fetchResult(movie) {
  const url =
    "https://api.themoviedb.org/3/search/movie?query=" +
    movie +
    "&api_key=" +
    API_KEY;

  const request = axios.get(url);

  return {
    type: FETCH_RESULT,
    payload: request
  };
}
