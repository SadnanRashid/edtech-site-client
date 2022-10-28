import "./courses.css";
import "./courses.extra.css";
import React from "react";
import CoursesBreadcrumbs from "./courses.breadcrumbs";
import CoursesSidebar from "./courses.sidebar";
import CoursesMain from "./courses.main";

export default function Courses() {
  return (
    <div>
      <CoursesBreadcrumbs />
      <div className="courses-body d-flex flex-row mobile-display">
        <div className="courses-sidebar">
          <CoursesSidebar />
        </div>
        <div className="courses-main">
          <CoursesMain />
        </div>
      </div>
    </div>
  );
}
