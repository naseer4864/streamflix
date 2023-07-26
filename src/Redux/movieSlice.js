// src/redux/movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'f7a7c7a6b9099c9838bf9c622a5e3b62';
const API_URL = 'https://api.themoviedb.org/3';

// Create an async thunk to fetch trending movies
export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrendingMovies', async () => {
  const response = await axios.get(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    trendingMovies: [],
    currentMovieIndex: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.trendingMovies = action.payload;
    });
  },
});

export default movieSlice.reducer;
