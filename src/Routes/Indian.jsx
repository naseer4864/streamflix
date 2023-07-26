import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIndianMovies } from "../Redux/movieSlice";
import convertMinutesToHoursAndMinutes from "../pages/Runtime";


const Indian = () => {
  const dispatch = useDispatch();
  const indianMovies = useSelector((state) => state.movies.indianMovies);

  useEffect(() => {
    dispatch(fetchIndianMovies());
  }, [dispatch]);

  return (
    <div className="mother-container">
      <img src="https://i.ibb.co/znx6wqb/pexels-nishant-aneja-2477357.jpg" alt="" />
      <h1>INDIAN MOVIES</h1>
      <div className="viewall-container">
        {indianMovies.map((movie) => (
          <div key={movie.id} className="viewall-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="info">
                <h3>{movie.title}</h3>
                <p>Duration: {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indian;
