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

export default function CourseDetails() {
  const data = useLoaderData();
  const descLen = data.description.length;
  console.log(descLen);
  return (
    <div>
      <CoursesDetailsBreadcrumbs />
      <div className="courses-details-body mb-5">
        <div>
          <div className="d-flex flex-row">
            <h4>{data.title}</h4>
            <button className="btn btn-outline-dark ms-5">
              <BsDownload />
            </button>
          </div>
          <p className="font-res-small">{data.description.slice(0, 100)}...</p>
          <div className="d-flex flex-row">
            <p className="text-warning">
              <BsStarFill />
              <span className="ms-2 text-dark">{data.rating}</span>
            </p>
            <p className="text-primary ms-5">
              <BsFillCartCheckFill />
              <span className="ms-2 text-dark">{data.sale}</span>
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
          <div className="course-details-overview">
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
