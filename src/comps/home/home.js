import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mb-0">
      <HomeFront />
    </div>
  );
}

function HomeFront() {
  return (
    <div>
      <div className="home-img ">
        {/* <img src={require("../../media/back.jpg")} className="home-img" /> */}
        <div className="home-top-text">
          <h2 className="text-white">
            Learn New Skills Online With Top{" "}
            <span className="text-primary">Educators</span>{" "}
          </h2>
          <button className="btn btn-primary">
            <Link
              to="/courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              View Courses
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
