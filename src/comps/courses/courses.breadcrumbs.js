import React from "react";
import { Link } from "react-router-dom";

export default function CoursesBreadcrumbs() {
  return (
    <div className="courses-bread" aria-label="breadcrumb">
      <ol className="breadcrumb margin-bread">
        <li className="breadcrumb-item mt-2">
          <p>
            <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
              Home
            </Link>
          </p>
        </li>
        <li className="breadcrumb-item active  mt-2" aria-current="page">
          Library
        </li>
      </ol>
    </div>
  );
}
