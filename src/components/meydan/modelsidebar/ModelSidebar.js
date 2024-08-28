import React from "react";
import "./modelSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";

const ModelSidebar = () => {
  return (
    <div className="bedroom-model-sidebar">
      <h3 className="one-bedroom-model">STAND ALONE VILLA</h3>
      <div className="bedroom-model-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/knightsbridge/floor-plans-2"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss-new">6 BEDROOM</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/knightsbridge/floor-plans"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss-new">5 BEDROOM</h4>
          </Link>
        </div>
        <h3 className="one-bedroom-model">TOWNHOUSE</h3>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/knightsbridge/floor-plans-3"}
            className="d-flex flex-direction-row align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss-new">
              4 BEDROOM <br />
              <span style={{ fontSize: "10px", textAlign: "left" }}>
                MIDDLE
              </span>
            </h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/knightsbridge/floor-plans-4"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss-new">
              4 BEDROOM <br />
              <span style={{ fontSize: "10px" }}>RIGHT CORNER</span>
            </h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/knightsbridge/floor-plans-5"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss-new">
              4 BEDROOM <br />
              <span style={{ fontSize: "10px" }}>LEFT CORNER</span>
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelSidebar;
