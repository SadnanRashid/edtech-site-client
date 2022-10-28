import "./home.instructor.css";
import "../../App.css";

import React from "react";

export default function HomeInstructor() {
  return (
    <div className="mt-8">
      <h1 className="text-center text-dark font-roboto fw-bold">
        Our Instructors:{" "}
      </h1>
      <div className="in-box">
        <div className="in-con in-one me-5">
          <img src={require("../../media/i1.jpg")} className="in-con-img" />
          <h3 className="text-center mt-3"> Sadnan Rashid </h3>
          <h6 className="text-center mt-3 text-primary">
            Web and Software Engineer
          </h6>
          <button className="btn btn-outline-dark in-con-btn">View More</button>
        </div>
        <div className="in-con in-one me-5">
          <img src={require("../../media/i2.jpg")} className="in-con-img" />
          <h3 className="text-center mt-3"> Jhon Doe </h3>
          <h6 className="text-center mt-3 text-primary">
            Ai and Data Science Expert
          </h6>
          <button className="btn btn-outline-dark in-con-btn">View More</button>
        </div>
        <div className="in-con in-one">
          <img src={require("../../media/i3.jpg")} className="in-con-img" />
          <h3 className="text-center mt-3"> Aftab Husain </h3>
          <h6 className="text-center mt-3 text-primary">UI/UX Expert</h6>
          <button className="btn btn-outline-dark in-con-btn">View More</button>
        </div>
      </div>
    </div>
  );
}
