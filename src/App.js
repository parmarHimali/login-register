import React from "react";
import { Login } from "./component/Login";
import Registration from "./component/Registration";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Layout from "./component/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
