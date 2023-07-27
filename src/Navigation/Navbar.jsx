import { Fragment, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";




import { AuthContext } from "../Context/auth-Context";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="navbar-container">
        <img
          src="https://i.ibb.co/ZXmV9pt/Screenshot-2023-07-26-at-6-47-12-PM-removebg-preview.png"
          alt="logo"
          onClick={handleNav}
        />
        <div className="nav-links">
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="/Popular" className="Link">
            Popular
          </Link>
          {
            isLoggedIn ? (

          <Link to="/Profile" className="Link">
            Profile
          </Link>
            ) : (

          <Link to="/Login" className="Link">
            Login
          </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
