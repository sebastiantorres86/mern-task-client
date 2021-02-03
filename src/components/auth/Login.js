import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State for Login
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Extract from user
  const { email, password } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // When user wants to login
  const onSubmit = (e) => {
    e.preventDefault();

    // Validate that ther are no empty fields

    // Take it to action
  };

  return (
    <div className="form-user">
      <div>
        <h1 className="title">
          MERN<span>Task</span>
        </h1>
        <h2 className="copy">
          MERNTask is a free web application allowing you to organise your
          tasks in a fast & simple way
        </h2>
      </div>

      <div className="container-form shadow-dark">
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
          <div className="field-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="field-form">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Login"
            />
          </div>
        </form>

        <Link to={"new-account"} className="bind-count">
          Get account
        </Link>
      </div>
    </div>
  );
};

export default Login;
