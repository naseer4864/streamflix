import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvSeries } from "../Redux/movieSlice";
import convertMinutesToHoursAndMinutes from "../pages/Runtime";


const TvSeries = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector((state) => state.movies.tvSeries);

  useEffect(() => {
    dispatch(fetchTvSeries());
  }, [dispatch]);

  return (
    <div className="mother-container">
      <img src="https://i.ibb.co/CPZd0XZ/pexels-ricky-esquivel-2240571.jpg" alt="" />
      <h1>TV SERIES</h1>
      <div className="viewall-container">
        {tvSeries.map((serie) => (
          <div key={serie.id} className="viewall-card">
            <Link to={`/tv/${serie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
              <div className="info">
                <h3>{serie.name}</h3>
                <p>Duration: {convertMinutesToHoursAndMinutes(serie.runtime)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvSeries;
