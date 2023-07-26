import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../Redux/movieSlice";
import convertMinutesToHoursAndMinutes from "../pages/Runtime";


const Trendings = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  return (
    <div className="mother-container">

      <img src="https://i.ibb.co/Ph5nh49/pexels-cottonbro-studio-7299586.jpg" alt="" />
      <h1>TRENDINGS MOVIES</h1>
    <div className="viewall-container">
      {trendingMovies.map((movie) => (
          <div key={movie.id} className="viewall-card">
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="info">
                <h3>{movie.title}</h3>
                <p>Duration : {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Trendings;
