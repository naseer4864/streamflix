import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navigation/Navbar";
import Home from "./Routes/Home";
import Genres from "./Routes/Genres";
import Shop from "./Routes/Shop";
import Contact from "./Routes/Contact";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import CartItems from "./pages/cartItems";
import MovieDetail from "./pages/MoviesDetails";
import Trendings from "./Routes/Trendings"
import Toprated from "./Routes/Toprated";
import Upcoming from "./Routes/Upcoming";
import Indian from "./Routes/Indian";
import Chinese from "./Routes/Chinese";
import TvSeries from "./Routes/Tvseries";


function App() {
  const Location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  },[Location])
  return (
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="/Genres" element={<Genres/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/CartItems" element={<CartItems/>}/>
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/Trendings" element={<Trendings/>}/>
      <Route path="/Toprated" element={<Toprated/>}/>
      <Route path="/Upcoming" element={<Upcoming/>}/>
      <Route path="/Indian" element={<Indian/>}/>
      <Route path="/Chinese" element={<Chinese/>}/>
      <Route path="/TvSeries" element={<TvSeries/>}/>
    </Route>
   </Routes>
  );
}

export default App;

