import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  // State for Login
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Extract from user
  const { name, email, password, confirm } = user;
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

    // Minimum password of 6 characters

    // The two passwords are the same

    // Take it to action
  };

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Create an account</h1>

        <form onSubmit={onSubmit}>
          <div className="field-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your username"
              value={name}
              onChange={onChange}
            />
          </div>

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
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat your password"
              value={confirm}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign up"
            />
          </div>
        </form>

        <Link to={"/"} className="bind-count">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
