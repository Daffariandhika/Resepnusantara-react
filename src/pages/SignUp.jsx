import { useState } from "react";
import Validation from "./SignUpValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleUsernameInput = (event) => {
    setValues((prev) => ({ ...prev, username: event.target.value }));
  };

  const handleEmailInput = (event) => {
    setValues((prev) => ({ ...prev, email: event.target.value }));
  };

  const handlePasswordInput = (event) => {
    setValues((prev) => ({ ...prev, password: event.target.value }));
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (Object.values(errors).every((error) => error === "")) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            placeholder="Create Username"
            onChange={handleUsernameInput}
          />
          {errors.username && <span className="text-danger">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={handleEmailInput}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            placeholder="Create Password"
            onChange={handlePasswordInput}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <button className="btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}
