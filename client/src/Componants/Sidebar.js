import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../Css/Sidebar.css";
import { IoClose } from "react-icons/io5";
const Sidebar = () => {
  const sideref = useRef(null);
  const Clsmenu = () => {
    document.getElementById("sidebar").style.left = "-250px";
  };
  return (
    <div ref={sideref} className="sidebar" id="sidebar">
      <div className="close-menu" onClick={Clsmenu}>
        <IoClose style={{ fontWeight: 500 }} />
      </div>
      <ul className="nav flex-column mt-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Pages
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
