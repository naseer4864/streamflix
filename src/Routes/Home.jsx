import { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrendingMovies } from '../Redux/movieSlice';
import MovieList from '../Routes/MovieList';

const Home = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex((currentIndex) => (currentIndex + 1) % trendingMovies.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [trendingMovies]);

  const currentMovie = trendingMovies[currentMovieIndex];

  return (
    <Fragment>
      <div className="banner">
        <img
          id="banner-img"
          src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
          alt={currentMovie?.title}
        />
        <div className="banner-info">
          <h1>{currentMovie?.title}</h1>
          <div className="banner-btn">
            <button>Play</button>
            <button>Watch Later</button>
          </div>
          <h4>Released: {currentMovie?.release_date}</h4>
          <div className="banner-overview">
            <p>{currentMovie?.overview}</p>
          </div>
        </div>
      </div>
      <MovieList/>
    </Fragment>
  );
};

export default Home;
