
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import convertMinutesToHoursAndMinutes from '../pages/Runtime';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;


export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrendingMovies', async () => {
  const response = await axios.get(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
  const movies = response.data.results;
  const moviesWithRuntime = await Promise.all(
    movies.map(async (movie) => {
      const movieResponse = await axios.get(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`);
      return { ...movie, runtime: movieResponse.data.runtime };
    })
  );
  return moviesWithRuntime;
});

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', async () => {
  const response = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
  const movies = response.data.results;
  const moviesWithRuntime = await Promise.all(
    movies.map(async (movie) => {
      const movieResponse = await axios.get(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`);
      return { ...movie, runtime: movieResponse.data.runtime };
    })
  );
  return moviesWithRuntime;
});

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', async () => {
  const response = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}`);
  const movies = response.data.results;
  const moviesWithRuntime = await Promise.all(
    movies.map(async (movie) => {
      const movieResponse = await axios.get(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`);
      return { ...movie, runtime: movieResponse.data.runtime };
    })
  );
  return moviesWithRuntime;
});

export const fetchIndianMovies = createAsyncThunk('movies/fetchIndianMovies', async () => {
  const response = await axios.get(
    `${API_URL}/discover/movie?api_key=${API_KEY}&language=hi-IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=hi`
  );
  const movies = response.data.results;
  const moviesWithRuntime = await Promise.all(
    movies.map(async (movie) => {
      const movieResponse = await axios.get(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`);
      return { ...movie, runtime: movieResponse.data.runtime };
    })
  );
  return moviesWithRuntime;
});

export const fetchChineseMovies = createAsyncThunk('movies/fetchChineseMovies', async () => {
  const response = await axios.get(
    `${API_URL}/discover/movie?api_key=${API_KEY}&language=zh-CN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=zh`
  );
  const movies = response.data.results;
  const moviesWithRuntime = await Promise.all(
    movies.map(async (movie) => {
      const movieResponse = await axios.get(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`);
      return { ...movie, runtime: movieResponse.data.runtime };
    })
  );
  return moviesWithRuntime;
});


export const fetchTvSeries = createAsyncThunk('movies/fetchTvSeries', async () => {
  const response = await axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}`);
  const series = response.data.results;
  const seriesWithRuntime = await Promise.all(
    series.map(async (serie) => {
      const serieResponse = await axios.get(`${API_URL}/tv/${serie.id}?api_key=${API_KEY}`);
      return { ...serie, runtime: serieResponse.data.episode_run_time };
    })
  );
  return seriesWithRuntime;
});
export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const movie = response.data;
    return { ...movie, runtime: convertMinutesToHoursAndMinutes(movie.runtime)  };
  });
  
  
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    trendingMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    indianMovies: [],
    chineseMovies: [],
    tvSeries: [],
    currentMovieIndex: 0,
    movieDetails: null,
    playlists: [],

  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.trendingMovies = action.payload;
    });
    builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.topRatedMovies = action.payload;
    });
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.upcomingMovies = action.payload;
    });
    builder.addCase(fetchIndianMovies.fulfilled, (state, action) => {
      state.indianMovies = action.payload;
    });
    builder.addCase(fetchChineseMovies.fulfilled, (state, action) => {
      state.chineseMovies = action.payload;
    });
    builder.addCase(fetchTvSeries.fulfilled, (state, action) => {
      state.tvSeries = action.payload;
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      });
  },
});

export default movieSlice.reducer;

