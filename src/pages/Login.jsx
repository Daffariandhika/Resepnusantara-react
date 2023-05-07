import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id: "YOUR_CLIENT_ID",
      });
    });
  }, []);

  const handleGoogleSignIn = async () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(async (googleUser) => {
      const profile = googleUser.getBasicProfile();
      const email = profile.getEmail();
      // send the email to the server to log in the user
      try {
        const response = await axios.post('http://localhost:3000/login', {
          email
        });
        console.log(response.data);
        // If successful, redirect to dashboard or show success message
      } catch (error) {
        console.log(error);
        // Display error message to user
      }
    });
  };  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password
      });
      console.log(response.data);
      // If successful, redirect to dashboard or show success message
    } catch (error) {
      console.log(error);
      // Display error message to user
    }
  };
  
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn" type="submit">Login</button>
      </form>
      <div className="google-login-container">
        <button className="google-login-btn" onClick={handleGoogleSignIn}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg> Sign in with Google
        </button>
      </div>
      <div className="signup-container-btn">
        <p>Don't have an account yet?</p>
        <Link to="/signup">
        <button className="btn">Sign up</button>
        </Link>
      </div>
    </div>
  );
}