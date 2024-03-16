import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topratedMovies = useSelector((store) => store.movies.topratedMovies);

  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    !topratedMovies && getTopratedMovies();
  }, []);
};

export default useTopratedMovies;
