import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/feed">Feed</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
  </ul>
</nav>
);
export default Navigation;