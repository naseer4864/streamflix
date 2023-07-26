import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../Redux/movieSlice";
import convertMinutesToHoursAndMinutes from "../pages/Runtime";


const Upcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="mother-container">
      <img src="https://i.ibb.co/Bw6ZXBL/pexels-tima-miroshnichenko-7991525.jpg" alt="" />
      <h1>UPCOMING MOVIES</h1>
      <div className="viewall-container">
        {upcomingMovies.map((movie) => (
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

export default Upcoming;
