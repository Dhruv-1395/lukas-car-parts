import React from "react";
import '../Css/Navbar.css'
import { Link } from "react-router-dom";

const menus = [
  { name: "Products", path: "/" },
  { name: "Add Products", path: "/add" },
  { name: "Users", path: "/users" },
]
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           Dashboard
          </a>
          <ul className="nav justify-content-end">
            {
              menus.map((menus, index) => (
                <li key={index} className="nav-item">
                  <Link to={menus.path} className="nav-link">{menus.name}</Link>
                </li>
              ))
            }
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
