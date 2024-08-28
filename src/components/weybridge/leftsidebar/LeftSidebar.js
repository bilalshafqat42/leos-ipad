import React from "react";
import "./leftsidebar.css";
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
      <div className="left-navigation-menu">
        {/* <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/duba-land"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Dubai land</h4>
          </Link>
        </div> */}
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/exterior"}
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
            to={"/projects/weybridge-gardens/interior"}
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
            to={"/projects/weybridge-gardens/amenities"}
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
            to={"/projects/weybridge-gardens/walkthrough"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Walkthrough</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/animation"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faVideo}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Animation</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
