import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/mypokedex">MyPokedex</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
