import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import "./navbar.validation.css";

export function NotLoggedIn() {
  return (
    <div>
      <p className="nav-link text-success">
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export function LoggedIn() {
  const [disName, setDisName] = useState(null);
  const { user } = useContext(AuthContext);
  return (
    <div className="d-flex flex-column">
      <div className="navbar-user-box m-0">
        <img
          src={`${user?.photoURL}`}
          alt=""
          className="user-photo"
          onMouseEnter={() => setDisName(user?.displayName)}
          onMouseLeave={() => setDisName(null)}
        />
      </div>
      <p className="m-0 text-center text-success fw-bold font-monospace">
        {disName}
      </p>
    </div>
  );
}
