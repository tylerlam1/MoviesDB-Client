import React from "react";
import MovieListItem from "../containers/movie_list_item";

const MovieList = props => {
  const movieItems = <MovieListItem />;

  return <div>{movieItems};</div>;
};

export default MovieList;
