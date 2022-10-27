import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { VscFeedback, VscStarFull, VscSymbolKey } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function CoursesMain() {
  const { id } = useParams();
  const data = useLoaderData();
  let text = "";
  let result = "";
  //
  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <h6>{data.length} Courses Found</h6>
        <CourseMainSort />
      </div>
      <div className="d-flex flex-row flex-wrap">
        {data.map((e) => {
          return (
            <div className="card courses-card me-3 mb-5" key={e.id}>
              <img src={e.image} className="card-img-top courses-card-img" />
              <div className="card-body">
                <h5 className="card-title font-roboto font-res-big">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/courses/product/${e.id}`}
                  >
                    {e.title}
                  </Link>
                </h5>
                <div className="d-flex flex-row justify-content-between card-middle">
                  <p className="font-res-small text-muted fw-bold">
                    <VscFeedback /> {e.sale}
                  </p>
                  <p className="font-res-small text-muted fw-bold">
                    <VscStarFull /> {e.rating}
                  </p>
                  <p className="font-res-small text-muted fw-bold">
                    <VscSymbolKey /> English
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CourseMainSort() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By:
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            View
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Rating
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sale
          </a>
        </li>
      </ul>
    </div>
  );
}
