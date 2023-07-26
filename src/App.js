import { Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./Routes/Home";
import Genres from "./Routes/Genres";
import Shop from "./Routes/Shop";
import Contact from "./Routes/Contact";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import CartItems from "./pages/cartItems";


function App() {
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
    </Route>
   </Routes>
  );
}

export default App;
