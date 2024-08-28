import React from "react";
import "./bottomNavigation.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faDoorOpen,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

const BottomNavigation = () => {
  return (
    <div className="bottom-navigations-bar">
      <div className="mini-navigation-bar">
        <div className="navigation-content">
          <Link to={"/projects/knightsbridge"}>
            <FontAwesomeIcon
              icon={faHouse}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Home</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/projects/knightsbridge/location"}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Location</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/projects/knightsbridge/floor-plans-2"}>
            <FontAwesomeIcon
              icon={faCube}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">2d Floor Plans</h4>
          </Link>
        </div>
        <div className="navigation-content">
          <Link to={"/"}>
            <FontAwesomeIcon
              icon={faDoorOpen}
              className="icons-section-bottom-navigation"
            />
            <br />
            <h4 className="bottom-navigation-item">Back to main page</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
