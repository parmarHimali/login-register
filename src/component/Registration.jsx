import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Registration = ({ setUserDetail, setAllUsers, allUsers }) => {
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

  const navigateTo = useNavigate();
  const [error, setError] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};
    console.log(err);

    if (allUsers.some((users) => users.email == user.email)) {
      err.email = "Email already exists!";
    }
    if (allUsers.some((users) => users.phone == user.phone)) {
      err.phone = "Phone already exists!";
    }

    if (user.name === "") {
      err.name = "provide a username";
    }

    if (user.email === "") {
      err.email = "provide an email address";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)
    ) {
      err.email = "please provide valid email format";
    }

    if (user.phone === "") {
      err.phone = "provide phone number";
    } else if (!/^\d{10}$/.test(user.phone)) {
      err.phone = "provide 10 digits phone number";
    }

    if (user.password === "") {
      err.password = "provide password";
    }
    if (user.cpassword === "") {
      err.cpassword = "provide confirm password";
    } else if (user.password !== user.cpassword) {
      err.cpassword = "password and confirm password didn't match";
    }
    if (user.gender === "") {
      err.gender = "select gender";
    }

    if (user.city === "") {
      err.city = "please select city";
    }
    if (user.agree === "") {
      err.agree = "term&conditions must be accepted before registration";
    }
    setError({ ...err });

    if (Object.keys(err).length == 0) {
      setUserDetail(user);
      setAllUsers([...allUsers, user]);
      localStorage.removeItem("loginUser");
      alert("User registered successfully!");
      navigateTo("/login");
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
    </div>
  );
};

export default Registration;
