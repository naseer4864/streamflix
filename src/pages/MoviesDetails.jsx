import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById } from '../Redux/movieSlice';


const MovieDetail = () => {
  const { id } = useParams();
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    // If the movie details are not available in the Redux store, fetch them from the API
    if (!movieDetails || movieDetails.id !== parseInt(id)) {
      dispatch(fetchMovieById(id));
    }
  }, [id, movieDetails, dispatch]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='moviesId-container'>
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
        alt={movieDetails.title}
        />
        <div className="moviesId-info">
        <h1>{movieDetails.title}</h1>
        <h3>Duration : {movieDetails.runtime} minutes</h3>
        <h4>Released: {movieDetails.release_date}</h4>
        <span>TAGS: {movieDetails.genres.map((genre) => genre.name).join(', ')}</span>
        <p>{movieDetails.overview}</p>
        <button>+ Playlist</button>
        </div>
    </div>
  );
};

export default MovieDetail;

