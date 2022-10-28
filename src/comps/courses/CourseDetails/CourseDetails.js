import "./course-details.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesDetailsBreadcrumbs from "./CoursesDetails.bread";
import {
  BsStarFill,
  BsFillCartCheckFill,
  BsFillClockFill,
  BsDownload,
} from "react-icons/bs";
import { Link } from "react-router-dom";
// import for react-pdf
import Pdf from "react-to-pdf";

export default function CourseDetails() {
  // for react-pdf
  const ref = React.createRef();
  //
  const data = useLoaderData();
  const descLen = data.description.length;
  return (
    <div>
      <CoursesDetailsBreadcrumbs />
      <div className="courses-details-body mb-5">
        <div>
          <div className="d-flex flex-row">
            <h4>{data.title}</h4>
            <div className="mobile-btn-view">
              <Pdf targetRef={ref} filename="course-details-courseplus.pdf">
                {({ toPdf }) => (
                  <button
                    onClick={toPdf}
                    className="btn btn-outline-dark ms-5 mobile-btn-p"
                  >
                    <BsDownload />
                  </button>
                )}
              </Pdf>
              <button className="btn btn-outline-dark ms-2 mobile-btn-p">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/checkout/${data.id}`}
                >
                  Buy Premium
                </Link>
              </button>
            </div>
          </div>
          <p className="font-res-small">{data.description.slice(0, 100)}...</p>
          <div className="d-flex flex-row">
            <p className="text-warning">
              <BsStarFill />
              <span className="ms-2 text-dark">{data.rating}</span>
            </p>
            <p className="text-primary ms-5">
              <BsFillCartCheckFill />
              <span className="ms-2 text-dark">{data.price} tk</span>
            </p>
            <p className="text-success ms-5">
              <BsFillClockFill />
              <span className="ms-2 text-dark">2 Weeks</span>
            </p>
          </div>
          <hr />
          {/* author part : */}
          <div className="d-flex flex-row">
            <img src={data.author_image} className="author-image" />
            <p className="fw-bold text-success mt-2 ms-2">{data.author}</p>
          </div>
          <hr />
          {/* Course image and description */}

          <div className="course-details-overview w-100" ref={ref}>
            <img src={data.image} className="course-details-image" />
            <div className="p-3 course-details-overview-desc mt-3">
              <p className="font-res-small">{data.description.slice(0, 300)}</p>
              <p className="font-res-small">
                {data.description.slice(300, 800)}
              </p>
              <p className="font-res-small">
                {data.description.slice(800, descLen)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
