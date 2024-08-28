import React from "react";
import { weybridgeDbs } from "../../../../db/weybridgeDb";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPuzzlePiece,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";

import BottomNavigationBar from "../../../../components/weybridge/bottomNavigation/BottomNavigationBar";

const WeybridgeAvailableUnits = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-section">
              <Link to="/">
                <h1 className="mt-4 mb-2 page-heading-title">
                  Available Units
                </h1>
              </Link>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Leos International"
                  width={130}
                  height={40}
                  className="mt-3 mb-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide">
                <div className="items whey-exterior-one-slide-one">
                  <div className="content">
                    <div className="name">WEYBRIDGE GARDENS</div>
                    <div className="des">Dubailand Living</div>
                  </div>
                </div>
                <div className="buttons">
                  <button id="prev" onClick={handleLeftNavigation}>
                    <i className="fa-solid fa-angle-left">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="icons-section-bottom-navigation"
                      />
                    </i>
                  </button>
                  <button id="next" onClick={handleRightNavigation}>
                    <i className="fa-solid fa-angle-right">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="icons-section-bottom-navigation"
                      />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LeftSidebar /> */}
      <div className="left-navigation-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/units"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Units</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/available-units"}
            className="d-flex flex-direction-row text-center align-items-center"
            style={{ backgroundColor: "green", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss" style={{ color: "#fff" }}>
              Available
            </h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/sold-units"}
            className="d-flex flex-direction-row text-center align-items-center"
            style={{ backgroundColor: "red", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss" style={{ color: "#fff" }}>
              Sold
            </h4>
          </Link>
        </div>
      </div>
      {/* <ProjectBottomBar /> */}
      <BottomNavigationBar />

      <div className="right-navigation-menu units-section-sidebars">
        <div className="left-navigation-menu">
          <div className="row gx-2 m-1">
            {/* .filter((firstFloor) => firstFloor.status == "Available") */}

            {weybridgeDbs
              .filter((weybridgeDb) => weybridgeDb.status == "Available")
              .map((weybridgeDb, index) => (
                <div className="col-6">
                  <Link
                    to={`/projects/weybridge-gardens/units/${weybridgeDb.id}`}
                    kay={index}
                    className=""
                  >
                    <div
                      className={`${
                        weybridgeDb.status === "Available"
                          ? "green-bg"
                          : "red-bg"
                      } w-100`}
                    >
                      <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                        <FontAwesomeIcon
                          icon={faBed}
                          className="icons-section-bottom-navigation mt-2 mb-0"
                        />
                        <h4 className="bottom-navigation-itemss pt-2 mb-3">
                          WG-{weybridgeDb.unitNo}
                        </h4>
                        <p className="small-text">{weybridgeDb.bedrooms}</p>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeybridgeAvailableUnits;
