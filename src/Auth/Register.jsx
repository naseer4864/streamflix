import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/authSlice";

const defaultForm = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: ""
};

const Register = () => {
  const [formField, setFormfield] = useState(defaultForm);
  const [error, setError] = useState(false);
  const { firstname, lastname, username, email, password } = formField;
  const resetForm = () => {
    setFormfield(defaultForm);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && username && email && password) {
      const formData = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password
      };
      dispatch(register(formData));
      resetForm();
      navigate("/");
    } else {
      setError("All fields are required.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfield({ ...formField, [name]: value });
    setError(false);
  };

  return (
    <div className="regsiter-container">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FIRSTNAME
          <input type="text" name="firstname" value={firstname} onChange={handleChange} />
        </label>
        <label>
          LASTNAME
          <input type="text" name="lastname" value={lastname} onChange={handleChange} />
        </label>
        <label>
          USERNAME
          <input type="text" name="username" value={username} onChange={handleChange} />
        </label>
        <label>
          EMAIL
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
        <label>
          PASSWORD
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>
        {error && <p>{error}</p>}
        <button>Register</button>
        <p onClick={() => navigate("/Login")}>Already have an account? Log in here</p>
      </form>
    </div>
  );
};

export default Register;
