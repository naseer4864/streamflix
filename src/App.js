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
    </Route>
   </Routes>
  );
}

export default App;

