import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

export default function CoursesSidebar() {
  return (
    <div className="d-flex flex-column">
      {/* Search bar : */}
      <CoursesSidebarSearch />
      {/* End of Search bar */}
      <CoursesSidebarCategories />
    </div>
  );
}

function CoursesSidebarSearch() {
  return (
    <div className="input-group input-group-sm mb-3 mt-1">
      <input
        type="text"
        className="form-control input-search"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="search courses..."
      />
      <div className="input-group-prepend">
        <button className="btn btn-outline-dark search-button">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

function CoursesSidebarCategories() {
  //Load all categories
  const [courseData, setCourseData] = useState([]);
  let cData = [];
  // Cannot use useState for slow loading on server. Research and try fixing this issue later look.later

  useEffect(() => {
    fetch("https://assignment10-server-rose.vercel.app/courses/categories")
      .then((res) => res.json())
      .then((data) => {
        cData = data;
        setCourseData(cData);
      });
  }, []);
  // End of load all categories

  return (
    <div>
      <h4 className="mb-3">Categories: </h4>
      <div>
        {courseData.map((e) => {
          return (
            <div className="mt-3" key={e.id}>
              {
                <Link
                  style={{
                    textDecoration: "none",
                    color: "gray",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                  to={`/courses/${e.id}`}
                >
                  {e.name}
                </Link>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
