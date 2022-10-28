import "./home.extra.css";

import React from "react";

export default function HomeBottom() {
  return (
    <div className="home-bottom-first">
      <div className="home-bottom-first-box text-center first-b">
        <h2>Find Your Dream Course: </h2>
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Courses"
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-bottom-second-box text-center second-b text-white">
        <h1>Course Completion Certificate</h1>
        <p>
          Upon successful completion of the course, students will be issued a
          certificate jointly signed by the institution and the Instructors.
        </p>
      </div>
      <div className="home-bottom-first-box third-b text-center text-white">
        <h1>Quizzes, Videos, Code Snippets & More</h1>
        <p>
          Test your understanding of Computer programming concepts with
          CoursePlus's quick multiple choice quizzes, videos and code snippets.
        </p>
      </div>
    </div>
  );
}
