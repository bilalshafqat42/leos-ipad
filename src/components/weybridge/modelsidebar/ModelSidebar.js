import React from "react";
import "./modelSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";

const ModelSidebar = () => {
  return (
    <div className="bedroom-model-sidebar">
      <h3 className="one-bedroom-model">STUDIO PLANS</h3>
      <div className="bedroom-model-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-7"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Studio Type A</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-8"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Studio Type B</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-9"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Studio Type C</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-10"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Studio Type D</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-11"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Studio Type E</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-12"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Studio Type F</h4>
          </Link>
        </div>
      </div>{" "}
      <hr />
      <h3 className="one-bedroom-model">1 BR PLANS</h3>
      <div className="bedroom-model-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">1 Br Type A</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-2"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">1 Br Type B</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-3"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">1 Br Type C</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-4"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">1 Br Type D</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-5"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">1 Br Type E</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/unit-plans-6"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">1 Br Type F</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelSidebar;
