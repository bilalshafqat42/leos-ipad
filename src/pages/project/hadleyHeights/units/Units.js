import React from "react";
import "../../projectPage.css";
import "../hadleyHeights.css";
import "../exterior.css";

import { firstFloors } from "../../../../db/firstFloor";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonShelter,
  faArrowRight,
  faArrowLeft,
  faPuzzlePiece,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";
import ProjectBottomBar from "../../../../components/projectBottomBar/ProjectBottomBar";

const Units = () => {
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
      <div className="row">
        <div className="col">
        <div className="main-mini-heading-sections">
            <h1 className="mt-2 page-heading-title">
              <Link to="/">HADLEY HEIGHTS UNITS</Link>
            </h1>
            <Link to="/">
              <img
                src={Logo}
                alt="Leos International"
                width={70}
                height={21}
                className="mt-3 mb-3"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide">
                <div className="items exterior-one-slide-three">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-one">
                  <div className="content">
                    <div className="name">MODERN ARCHITECTURE & DESIGN</div>
                    <div className="des">
                      Designed and built to the highest quality specifications
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-two">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
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
      <div className="left-navigation-menu units-section-sidebars">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/floors"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Floors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/units"}
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
            to={"/projects/hadley-heights/available-units"}
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
            to={"/projects/hadley-heights/sold-units"}
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
      <ProjectBottomBar />
      <div className="right-navigation-menu units-section-sidebars">
        <div className="left-navigation-menu">
          <div className="row gx-2 m-1">
            {firstFloors.map((firstFloor, index) => (
              <div className="col-6">
                <Link
                  to={`/projects/hadley-heights/units/${firstFloor.id}`}
                  kay={index}
                  className=""
                >
                  <div
                    className={`${
                      firstFloor.status === "Available" ? "green-bg" : "red-bg"
                    } w-100 px-2`}
                  >
                    <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                      <FontAwesomeIcon
                        icon={faBed}
                        className="icons-section-bottom-navigation mt-2 mb-0"
                      />
                      <h4 className="bottom-navigation-itemss pt-2 mb-3">
                        {firstFloor.unitNo}
                      </h4>
                      <p className="small-text">{firstFloor.bedrooms}</p>
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

export default Units;
