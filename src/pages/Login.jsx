import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./LoginValidation";

export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleEmailInput = (event) => {
    setValues((prev) => ({ ...prev, email: event.target.value }));
  };

  const handlePasswordInput = (event) => {
    setValues((prev) => ({ ...prev, password: event.target.value }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setSubmitted(true);

    if (Object.values(errors).every((error) => error === "")) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          console.log(res.data); // Log the response data to the console
          if (res.data.message === "Success") {
            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleEmailInput}
          />
          {submitted && errors.email && (
            <span className="text-danger"> {errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={handlePasswordInput}
          />
          {submitted && errors.password && (
            <span className="text-danger"> {errors.password}</span>
          )}
        </div>
        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
      <div className="signup-container-btn">
        <p>Don't have an account yet?</p>
        <Link to="/signup">
          <button className="btn">Sign up</button>
        </Link>
      </div>
    </div>
  );
}
