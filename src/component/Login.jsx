import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};
    if (email === "") {
      err.email = "please provide email";
    } else if (!email.match(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/)) {
      err.email = "provide valid email format";
    } else {
      err.email = "";
    }

    if (password === "") {
      err.password = "please provide password";
    } else {
      err.password = "";
    }
    setError({ ...err });

    if (err.email === "" && err.password === "") {
      alert("User Login successfully!");
      setUser({ email, password });
      setEmail("");
      setPassword("");
      setError({});
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login to your Account</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p>*{error.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <p>*{error.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {user !== null && (
          <>
            <h3>Login Data:</h3>
            <ul>
              <li>
                <span>Email:</span> {user.email}
              </li>
              <li>
                <span>Password:</span> {user.password}
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
