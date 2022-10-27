import "./course-details.css";
import React from "react";
import { useLoaderData } from "react-router-dom";

export default function CourseDetails() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Course details page</h1>
    </div>
  );
}
