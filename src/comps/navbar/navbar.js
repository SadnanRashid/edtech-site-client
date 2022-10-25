import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={require("../../media/logo.png")} alt="..." height={36} />
        </a>
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
              <a className="nav-link text-dark " aria-current="page" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-success "
                aria-current="page"
                href="#"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark " aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark " aria-current="page" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
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
                    for="flexSwitchCheckDefault"
                  ></label>
                </div>
                <BsFillMoonFill className="mt-1 ms-0" />
              </div>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
