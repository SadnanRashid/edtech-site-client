import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../comps/navbar/navbar";
import Footer from "../comps/footer/footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
