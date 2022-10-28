import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Main from "./layout/Main";
import Home from "./comps/home/home";
import Login from "./comps/login/Login";
import Register from "./comps/register/Register";
import Courses from "./comps/courses/courses";
import CourseDetails from "./comps/courses/CourseDetails/CourseDetails";
import Checkout from "./comps/checkout/checkout";
import PrivateRoute from "./privateRoute/privateroute";
import Blogs from "./comps/blogs/blogs";
import Error404 from "./comps/404/error404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "*",
          element: <Error404></Error404>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () =>
            fetch("https://assignment10-server-rose.vercel.app/courses"),
        },
        {
          path: "/courses/:id",
          element: <Courses></Courses>,
          loader: ({ params }) =>
            fetch(
              `https://assignment10-server-rose.vercel.app/courses/category/${params.id}`
            ),
        },
        {
          path: "/courses/product/:id",
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(
              `https://assignment10-server-rose.vercel.app/courses/get/${params.id}`
            ),
        },
        {
          path: "/checkout/:id",
          element: (
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://assignment10-server-rose.vercel.app/courses/get/${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
