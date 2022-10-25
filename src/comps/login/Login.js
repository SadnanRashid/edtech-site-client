import React from "react";
import "./login.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// Icons:
import { BsGoogle, BsGithub } from "react-icons/bs";

export default function Login() {
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // for navigation
  const navigate = useNavigate();

  if (user) {
    navigate("/");
    // return (
    //   <h1 className="text-center mt-5 mb-5">
    //     Already signed in. Redirecting to home
    //   </h1>
    // );
  }

  return (
    <section className="login-margin">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <BsGoogle />
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <BsGithub />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <h5 className="text-danger" id="sign-in-error"></h5>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  onInput={(e) => setPass(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={(e) => {
                    signIn(email, pass);
                    e.preventDefault();
                  }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Signin function. Move later?
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("signed in with", user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("sign-in-error").innerText = error.message;
    });
}
