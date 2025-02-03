import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setLoginDetail, userDetail, allUsers }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigateTo = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};
    if (user.email === "") {
      err.email = "please provide email";
    } else if (
      !user.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      err.email = "provide valid email format";
    }

    if (user.password === "") {
      err.password = "please provide password";
    }
    setError({ ...err });

    if (Object.keys(err).length === 0) {
      const check = allUsers.filter((users) => {
        return users.email === user.email && users.password === user.password;
      });
      if (check.length === 1) {
        setLoginDetail(check[0]);
        localStorage.setItem("loginUser", JSON.stringify(check[0]));
        navigateTo("/login-success");
      } else {
        alert("Email or Password does not match!");
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Login to your Account</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
          {error.email && <p>*{error.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            value={user.password}
            onChange={handleChange}
          />
          {error.password && <p>*{error.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
