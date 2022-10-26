import "./courses.css";
import "./courses.extra.css";
import React from "react";
import CoursesBreadcrumbs from "./courses.breadcrumbs";
import CoursesSidebar from "./courses.sidebar";

export default function Courses() {
  return (
    <div>
      <CoursesBreadcrumbs />
      <div className="courses-body d-flex flex-row">
        <div className="courses-sidebar">
          <CoursesSidebar />
        </div>
        <div className="courses-main">
          <h1>Course body</h1>
        </div>
      </div>
    </div>
  );
}
