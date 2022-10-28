import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { LoggedIn, NotLoggedIn } from "./user.validation";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={require("../../media/logo.png")} alt="..." height={36} />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <p className="nav-link text-dark">
                <Link
                  to="/courses"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Courses
                </Link>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-dark ">
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Blog
                </Link>
              </p>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark " aria-current="page" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item me-5">
              <div className="d-flex flex-row mt-2">
                <BsFillSunFill className="mt-1 me-1" />
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    // for="flexSwitchCheckDefault"
                  ></label>
                </div>
                <BsFillMoonFill className="mt-1 ms-0" />
              </div>
            </li>
            <li className="nav-item">
              {user ? <LoggedIn /> : <NotLoggedIn />}
              {/* importing React function of user state from user.validation.js*/}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
