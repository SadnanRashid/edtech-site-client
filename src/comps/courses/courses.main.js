import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CoursesMain() {
  const { id } = useParams();
  const data = useLoaderData();
  //
  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <h6>{data.length} Courses Found</h6>
        <CourseMainSort />
      </div>
      <h2>Main section</h2>
      <div className="d-flex flex-row flex-wrap">
        {data.map((e) => {
          return (
            <div className="card courses-card me-3 mb-5">
              <img
                src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/74/4e/28/744e280a-3e77-2da1-aad7-a133b5305b8e/source/512x512bb.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title font-roboto">Card title</h5>
                <p className="card-text font-roboto">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
          <a className="dropdown-item">View</a>
        </li>
        <li>
          <a className="dropdown-item">Rating</a>
        </li>
        <li>
          <a className="dropdown-item">Sale</a>
        </li>
      </ul>
    </div>
  );
}
