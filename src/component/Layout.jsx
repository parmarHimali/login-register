import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
