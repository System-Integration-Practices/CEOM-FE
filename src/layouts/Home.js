import React from "react";
import "../css/layouts/Home.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__sidebar">
        <Sidebar classMenu="home__sidebar-menu"></Sidebar>
      </div>
      <div className="home__content">
        <Header className="home__header"></Header>
        <div className="home__outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
