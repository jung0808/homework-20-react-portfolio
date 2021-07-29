import React from "react";

import "./header.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <h1>Jung Woo Nam</h1>
      <ul>
        <li>
          <Link className="link" to="/">
            <h2>AboutMe</h2>
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            <h2>Projects</h2>
          </Link>
        </li>
        <li>
          <Link className="link" to="/resume">
            <h2>Resume</h2>
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
