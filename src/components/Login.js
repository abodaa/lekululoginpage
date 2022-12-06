import React from "react";
import "../styles/login.scss";
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
          placeholder="Enter Email Username "
        />
        <input
          className="input"
          type="text"
          name="password"
          //   value={query}
          //   onChange={(e) => {
          //     setQuery(e.target.value);
          //   }}
          placeholder="Enter Password"
        />
        <button className="input-btn">Login </button>
      </form>
      <a className="forget-pswd-link" href="#">
        Forgot Password?
      </a>
      <div className="sign-up-link-container">
        <p>New to Lekulu Entertainment?</p>
        <a className="Signup-link" href="#">
          Sign up now
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, minus?
        Quisquam, eaque. Culpa rerum repellendus consectetur, sapiente facilis
        dolore deserunt?{" "}
        <a className="forget-pswd-link" href="#">
          LearnMore
        </a>
      </p>
    </div>
  );
}
