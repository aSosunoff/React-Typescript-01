import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue darken-3 px1">
      <a href="/#" className="brand-logo">
        Ежедневник
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/todos">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
