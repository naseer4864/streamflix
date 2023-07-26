import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../Redux/movieSlice";
import convertMinutesToHoursAndMinutes from "../pages/Runtime";


const Toprated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  return (
    <div className="mother-container">
      <img src="https://i.ibb.co/hZZKHGg/pexels-roberto-nickson-3131971.jpg" alt="" />
      <h1>TOPRATED MOVIES</h1>
      <div className="viewall-container">
        {topRatedMovies.map((movie) => (
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

export default Toprated;
