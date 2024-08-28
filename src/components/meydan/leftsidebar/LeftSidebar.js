import React from "react";
import "./leftSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCouch,
  faHeart,
  faLocationDot,
  // faVideo,
  // faCircleNodes,
} from "@fortawesome/free-solid-svg-icons";

const LeftSidebar = () => {
  return (
    <>
      <div className="left-navigation-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/knightsbridge/exterior"}
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
            to={"/projects/knightsbridge/interior"}
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
            to={"/projects/knightsbridge/amenities"}
            // to={"/projects/knightsbridge"}
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
            // to={"/projects/knightsbridge/amenities"}
            to={"/projects/knightsbridge/dubai-map"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Dubai Map</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            // to={"/projects/knightsbridge/amenities"}
            to={"/projects/knightsbridge/meydaan-district-map"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">MEYDAN D-11</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            // to={"/projects/knightsbridge/amenities"}
            to={"/projects/knightsbridge/cluster-map"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Cluster Map</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
