import React from "react";
import "../styles/login.scss";
import facebook from "../images/facebook.png";
import google from "../images/google.png";

export default function Login() {
  const [username, setUsername] = React.useState({});
  return (
    <div className="login-page-container">
      <form action="" className="form-container">
        <h1>Sign In</h1>
        {/* <img src="#" alt="showimage" /> */}

        <input
          className="input"
          type="text"
          name="username"
          //   value={query}
          //   onChange={(e) => {
          //     setQuery(e.target.value);
          //   }}
          placeholder="Enter Email or Username "
        />
        <input
          className="input"
          type="password"
          name="password"
          //   value={query}
          //   onChange={(e) => {
          //     setQuery(e.target.value);
          //   }}
          placeholder="Enter Password"
        />
        <button className="input-btn">Sign In </button>
      </form>
      <a className="forget-pswd-link" href="#">
        Forgot Password?
      </a>
      <div className="oat-login-container">
        <button className="oat">
          <img className="oat-icons" src={facebook} alt="" /> Continue with
          Facebbok
        </button>

        <button className="oat">
          <img className="oat-icons" src={google} alt="" /> Continue with Google
        </button>
      </div>
      <div className="sign-up-link-container">
        <p>New to Lekulu Entertainment?</p>
        <a className="Signup-link" href="#">
          Sign up now
        </a>
      </div>
      <p className="reminder">
        Just a reminder, You don't need to register and Sign In to watch movies.
        The benefit of registering is to save and watch all your favorites and
        watchlist permanently.
        <a className="forget-pswd-link" href="#">
          LearnMore
        </a>
      </p>
    </div>
  );
}
