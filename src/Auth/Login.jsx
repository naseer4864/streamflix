import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/authSlice"; 

const defaultForm = {
  username: "",
  password: ""
};

const Login = () => {
  const [formField, setFormfield] = useState(defaultForm);
  const [error, setError] = useState(false);
  const { username, password } = formField;
  const resetForm = () => {
    setFormfield(defaultForm);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length <= 3) {
      setError("Username is required. At least 4 characters.");
    } else if (password.length <= 5) {
      setError("Password is required. At least 6 characters.");
    } else {
      dispatch(login({ username: username, password: password }));
      resetForm();
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfield({ ...formField, [name]: value });
    setError(false);
  };

  return (
    <div className="regsiter-container">
      <p>We are Happy to have you back</p>
      <form onSubmit={handleSubmit}>
        <label>
          USERNAME
          <input type="text" name="username" value={username} onChange={handleChange} />
        </label>
        <label>
          PASSWORD
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>
        {error && <p>{error}</p>}
        <button>Login</button>
        <p onClick={() => navigate("/Register")}>Not a member? Sign up in here</p>
      </form>
    </div>
  );
};

export default Login;
