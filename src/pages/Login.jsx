import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./LoginValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock, faPen } from "@fortawesome/free-solid-svg-icons";


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
        <h2>Sign In <FontAwesomeIcon icon={faUser}/></h2>
        <div className="form-group">
          <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope}/> Email :</label>
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
          <label htmlFor="password"><FontAwesomeIcon icon={faLock}/> Password :</label>
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
        <button className="btn" type="submit">Sign In <FontAwesomeIcon icon={faUser}/></button>
      </form>
      <div className="signup-container-btn">
        <p>Don't have an account yet?</p>
        <Link to="/signup">
          <button className="btn">Sign up <FontAwesomeIcon icon={faPen}/></button>
        </Link>
      </div>
    </div>
  );
}
