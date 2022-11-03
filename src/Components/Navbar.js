import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <img
        src={require("../Asset/toolhub.png")}
        alt="greyhound"
        width="50px"
        height="50px"
        color="red"
      />
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/LeaderBoard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/DashBoard">DashBoard</Link>
        </li>
      </ul>

      <div className="hamburger">
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
