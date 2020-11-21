import React from "react";
import "./../styles.css";
import { Link } from "react-router-dom";

export default function Nav() {


  return (
    <nav>
      <ul>
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>About</li>
        </Link>
        <Link className="nav-link" to="/joke">
          <li>Joke</li>
        </Link>
      </ul>
    </nav>
  );
}

