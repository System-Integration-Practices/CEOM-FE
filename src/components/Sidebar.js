import React from "react";
import "../css/components/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ classMenu, ...props }) => {
  return (
    <>
      <div className="sidebar__container">
        <div className={`sidebar__menu ${classMenu}`}>
          <h2 className="sidebar__heading">CEO MEMO</h2>
          <div className="sidebar__block">
            <img src="/assets/icons/menu.svg" alt="" />
          </div>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__auth">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="sidebar__avatar"
            />
            <div className="sidebar__info">
              <div className="sidebar__name">Sierra Ferguson</div>
              <div className="sidebar__email">abc@gmail.com</div>
            </div>
          </div>
          <div className="sidebar__links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sidebar__link enable" : "sidebar__link"
              }
              to={"/"}
            >
              <img src="/assets/icons/dashboard.svg" alt="" />
              <span className="sidebar__link-name">Overview</span>
            </NavLink>
            <NavLink className={`sidebar__link`}>
              <img src="/assets/icons/ring.svg" alt="" />
              <span className="sidebar__link-name">Alert</span>
            </NavLink>
            <NavLink className={`sidebar__link`}>
              <img src="/assets/icons/communication.svg" alt="" />
              <span className="sidebar__link-name">Manage Information</span>
            </NavLink>
          </div>
        </div>
        <NavLink className={`sidebar__link`}>
          <img src="/assets/icons/log-out.svg" alt="" />
          <span className="sidebar__link-name">Log Out</span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
