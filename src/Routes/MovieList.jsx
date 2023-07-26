import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchIndianMovies,
  fetchChineseMovies,
  fetchTvSeries,
} from '../Redux/movieSlice';
import { Link, Outlet } from 'react-router-dom';
import convertMinutesToHoursAndMinutes from '../pages/Runtime';

const MovieList = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const indianMovies = useSelector((state) => state.movies.indianMovies);
  const chineseMovies = useSelector((state) => state.movies.chineseMovies);
  const tvSeries = useSelector((state) => state.movies.tvSeries);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchIndianMovies());
    dispatch(fetchChineseMovies());
    dispatch(fetchTvSeries());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="movie-list-container">
        <div className="movie-section">
          <div className="selection">
            <h1>Trending Movies</h1>
            <Link to="/Trendings" className="m-link">
              View All
            </Link>
          </div>
          <Slider {...settings}>
            {trendingMovies.map((movie) => (
              <div key={movie.id} className="movie">
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                  <div className="movie-info">
                    <div className="overview">
                      <h3>{movie.title}</h3>
                      <p>Duration : {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="movie-section">
          <div className="selection">
            <h1>Top Rated Movies</h1>
            <Link to="/Toprated" className="m-link">
              View All
            </Link>
          </div>
          <Slider {...settings}>
            {topRatedMovies.map((movie) => (
              <div key={movie.id} className="movie">
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                  <div className="movie-info">
                    <div className="overview">
                      <h3>{movie.title}</h3>
                      <p>Duration : {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="movie-section">
          <div className="selection">
            <h1>Upcoming Movies</h1>
            <Link to="/Upcoming" className="m-link">
              View All
            </Link>
          </div>
          <Slider {...settings}>
            {upcomingMovies.map((movie) => (
              <div key={movie.id} className="movie">
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                  <div className="movie-info">
                    <div className="overview">
                      <h3>{movie.title}</h3>
                      <p>Duration : {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="movie-section">
          <div className="selection">
            <h1>Indian Movies</h1>
            <Link to="/Indian" className="m-link">
              View All
            </Link>
          </div>
          <Slider {...settings}>
            {indianMovies.map((movie) => (
              <div key={movie.id} className="movie">
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                  <div className="movie-info">
                    <div className="overview">
                      <h3>{movie.title}</h3>
                      <p>Duration : {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="movie-section">
          <div className="selection">
            <h1>Chinese Movies</h1>
            <Link to="/Chinese" className="m-link">
              View All
            </Link>
          </div>
          <Slider {...settings}>
            {chineseMovies.map((movie) => (
              <div key={movie.id} className="movie">
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                  <div className="movie-info">
                    <div className="overview">
                      <h3>{movie.title}</h3>
                      <p>Duration : {convertMinutesToHoursAndMinutes(movie.runtime)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="movie-section">
          <div className="selection">
            <h1>TV Series</h1>
            <Link to="/TvSeries" className="m-link">
              View All
            </Link>
          </div>
          <Slider {...settings}>
            {tvSeries.map((series) => (
              <div key={series.id} className="movie">
                <Link to={`/series/${series.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185${series.poster_path}`} alt={series.name} />
                  <div className="movie-info">
                    <div className="overview">
                      <h3>{series.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default MovieList;

