import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

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
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/courses/categories/")
      .then((res) => res.json())
      .then((data) => setCat(data))
      .catch((e) => console.log(e));

    console.log(cat);
  }, []);
  return (
    <div>
      <h4 className="mb-3">Categories: </h4>
    </div>
  );
}
