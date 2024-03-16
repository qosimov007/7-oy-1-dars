import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-expand-sm bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/user" className="nav-link">
          Add User
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/project" className="nav-link">
          Add Project
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/AddTask" className="nav-link">
          Add task
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/ViewTask" className="nav-link">
          view Task
        </NavLink>
      </li>
    </ul>
  </nav>
);
