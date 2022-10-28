import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeBottom from "./home.bottom";
import HomeInstructor from "./home.instructor";

export default function Home() {
  return (
    <div className="mb-0">
      <HomeFront />
      <HomeBottom />
      <HomeInstructor />
    </div>
  );
}
//

function HomeFront() {
  return (
    <div className="mt-1">
      <div className="home-img ">
        {/* <img src={require("../../media/back.jpg")} className="home-img" /> */}
        <div className="home-middle-dets d-flex flex-column justify-content-center">
          <img src={require("../../media/logo.png")} className="logo-middle" />
          <div className="home-top-text">
            <h2 className="text-white font-huge font-os text-center">
              Learn New Skills Online With Top{" "}
              <span className="text-primary">Educators</span>{" "}
            </h2>
            <h1
              className="text-white text-center
          "
            >
              <Link
                to="/courses"
                style={{ textDecoration: "underline", color: "white" }}
              >
                View Courses
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
