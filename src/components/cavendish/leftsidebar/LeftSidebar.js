import React from "react";
import "./leftSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCouch,
  faHeart,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const LeftSidebar = () => {
  return (
    <>
      <div className="left-navigation-menu cavendish">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/cavendish/exterior"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Exteriors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/cavendish/interior"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faCouch}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Interiors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/cavendish/amenities"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Amenities</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/cavendish/animation-video"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faVideo}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Animation</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/cavendish/walk-through"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faVideo}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">walkthrough</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/cavendish/jvt"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">JVT</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
