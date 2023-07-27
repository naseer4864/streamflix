import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Navbar from "./Navigation/Navbar";
import Home from "./Routes/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Profile from "./Routes/Profile";
import MovieDetail from "./pages/MoviesDetails";
import Trendings from "./Routes/Trendings"
import Toprated from "./Routes/Toprated";
import Upcoming from "./Routes/Upcoming";
import Indian from "./Routes/Indian";
import Chinese from "./Routes/Chinese";
import TvSeries from "./Routes/Tvseries";
import Popular from "./Routes/Popular";
import Footer from "./Routes/Footer";


function App() {

  const Location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  },[Location])

  return (
    <Fragment>
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="/Popular" element={<Popular/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/Trendings" element={<Trendings/>}/>
      <Route path="/Toprated" element={<Toprated/>}/>
      <Route path="/Upcoming" element={<Upcoming/>}/>
      <Route path="/Indian" element={<Indian/>}/>
      <Route path="/Chinese" element={<Chinese/>}/>
      <Route path="/TvSeries" element={<TvSeries/>}/>
    </Route>
   </Routes>
   <Footer/>
    </Fragment>
  );
}

export default App;

