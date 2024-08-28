import React from "react";
import { FloorsNavigationBars } from "../../../db/hadley/floors/FloorsNavigationBars";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectUngroup } from "@fortawesome/free-solid-svg-icons";

import "./floorNavigation.css";

const FloorsNavigation = () => {
  return (
    <div className="floor-Navigation-list">
      {FloorsNavigationBars.map((floorNavigationBar) => (
        <button key={floorNavigationBar.id} className="sidebar-buttons-design">
          <Link to={floorNavigationBar.pageUrl}>
            {/* <Link> */}
            <FontAwesomeIcon
              icon={faObjectUngroup}
              className="icons-section-bottom-navigation"
            />
            {floorNavigationBar.name}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default FloorsNavigation;
