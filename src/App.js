import React, { useEffect, useState } from "react";
import { Login } from "./component/Login";
import Registration from "./component/Registration";
import { Routes, Route } from "react-router-dom";

import Layout from "./component/Layout";
import ShowData from "./component/ShowData";

const App = () => {
  const [userDetail, setUserDetail] = useState({});
  const [loginDetail, setLoginDetail] = useState(
    JSON.parse(localStorage.getItem("loginUser")) || {}
  );
  const [allUsers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("usersData")) || []
  );

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(allUsers));
  }, [allUsers]);
  console.log("login", loginDetail);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Registration
                setUserDetail={setUserDetail}
                setAllUsers={setAllUsers}
                allUsers={allUsers}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setLoginDetail={setLoginDetail}
                userDetail={userDetail}
                allUsers={allUsers}
              />
            }
          />
          <Route
            path="/login-success"
            element={
              <ShowData userDetail={userDetail} loginDetail={loginDetail} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
