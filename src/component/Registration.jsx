import { useState } from "react";
import "../App.css";

const Registration = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    gender: "",
    city: "",
    agree: "",
  });

  const [error, setError] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};

    if (user.name === "") {
      err.name = "provide a username";
    } else {
      err.name = "";
    }

    if (user.email === "") {
      err.email = "provide an email address";
    } else if (
      !/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/.test(user.email)
    ) {
      err.email = "please provide valid email format";
    } else {
      err.email = "";
    }
    if (user.phone === "") {
      err.phone = "provide phone number";
    } else if (!/^\d{10}$/.test(user.phone)) {
      err.phone = "provide 10 digits phone number";
    } else {
      err.phone = "";
    }

    if (user.password === "") {
      err.password = "provide password";
    } else {
      err.password = "";
    }
    if (user.cpassword === "") {
      err.cpassword = "provide confirm password";
    } else if (user.password !== user.cpassword) {
      err.cpassword = "password and confirm password didn't match";
    } else {
      err.cpassword = "";
    }
    if (user.gender === "") {
      err.gender = "select gender";
    } else {
      err.gender = "";
    }

    if (user.city === "") {
      err.city = "please select city";
    } else {
      err.city = "";
    }
    if (user.agree === "") {
      err.agree = "term&conditions must be accepted before registration";
    } else {
      err.agree = "";
    }
    setError({ ...err });

    if (
      err.name === "" &&
      err.phone === "" &&
      err.email === "" &&
      err.password === "" &&
      err.cpassword === "" &&
      err.cpassword === "" &&
      err.gender === "" &&
      err.city === "" &&
      err.agree === ""
    ) {
      setUserDetail(user);
      alert("User registered successfully!");
      setUser({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
        gender: "",
        city: "",
        agree: "",
      });
      setError({});
    }
  };
  return (
    <div className="form-container register">
      <form onSubmit={handleSubmit}>
        <h1>Register New Account</h1>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          {error.name && <p>*{error.name}</p>}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {error.email && <p>*{error.email}</p>}
        </div>
        <div className="form-control">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          {error.phone && <p>*{error.phone}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {error.password && <p>*{error.password}</p>}
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleChange}
          />
          {error.cpassword && <p>*{error.cpassword}</p>}
        </div>
        <div className="form-control-radio">
          <div className="radio-container">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                value="male"
                id="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                value="female"
                id="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          {error.gender && <p>*{error.gender}</p>}
        </div>
        <div className="form-control">
          <label>City</label>
          <select name="city" onChange={handleChange}>
            <option value="">Select City</option>
            <option value="surat">Surat</option>
            <option value="vadodara">Vadodara</option>
            <option value="gandhinagar">Gandhinagar</option>
            <option value="ahemdabad">Ahemdabad</option>
          </select>
          {error.city && <p>*{error.city}</p>}
        </div>
        <div className="form-control-radio">
          <div>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              value="agree"
              onChange={handleChange}
            />
            <label htmlFor="agree">Agree with terms & conditions</label>
          </div>
          {error.agree && <p>*{error.agree}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        {userDetail !== null && (
          <>
            <h3>Registered Data:</h3>
            <ul>
              <li>
                <span>Name:</span> {userDetail.name}
              </li>
              <li>
                <span>Email:</span> {userDetail.email}
              </li>
              <li>
                <span>Phone:</span> {userDetail.phone}
              </li>
              <li>
                <span>Password:</span> {userDetail.password}
              </li>
              <li>
                <span>Confirm Password:</span> {userDetail.cpassword}
              </li>
              <li>
                <span>Gender:</span> {userDetail.gender}
              </li>
              <li>
                <span>City:</span> {userDetail.city}
              </li>
              <li>
                <span>Agree with terms & conditions:</span> {userDetail.agree}
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;
