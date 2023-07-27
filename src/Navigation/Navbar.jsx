import React, { Fragment, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../Routes/Profile";

const Navbar = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false); // State variable to toggle Profile component

  const handleNav = () => {
    navigate("/");
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleProfileIconClick = () => {
    setShowProfile(!showProfile); // Toggle the value of showProfile when the icon is clicked
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
          {isAuthenticated ? (
            <i className="fa-solid fa-user" onClick={handleProfileIconClick}></i>
          ) : (
            <Link to="/Login" className="Link">
              Login
            </Link>
          )}
        </div>
      {showProfile && <Profile />}
      </div>
      <Outlet/>
    </Fragment>
  );
};

export default Navbar;

