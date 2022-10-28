import "./register.css";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { updateUserProfile } from "./Register.function";

export default function Register() {
  const [error, setError] = useState("");
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // include a function to check these params
    // search.later
    signUpWithEmailAndPassword(auth, email, password, photo, name);
  };
  //
  const signUpWithEmailAndPassword = (auth, email, password, photo, name) => {
    const profileData = {
      displayName: name,
      photoURL: photo,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError(""); //Edit later
        updateUserProfile(auth, profileData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setError(errorMessage);
      });
  };
  //
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <h5 className="text-dark">Email address</h5>
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputName1">
            <h5 className="text-dark">Full Name</h5>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="John Doe"
            name="fullName"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPhoto1">
            <h5 className="text-dark">Photo Url</h5>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhoto1"
            placeholder="Image URL"
            name="photo"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">
            <h5 className="text-dark">Password</h5>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      <h4>{error}</h4>
    </div>
  );
}
