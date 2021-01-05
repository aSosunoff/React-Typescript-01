import React from "react";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue darken-3 px1">
      <a href="/#" className="brand-logo">
        React + Typescript
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/">Список дел</a>
        </li>
        <li>
          <a href="/">Информация</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
