import React from "react";
import "./weybridge.css";

import LeftSidebar from "../../../components/weybridge/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/weybridge/bottomNavigation/BottomNavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const WeybridgeGardens = () => {
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
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">
                WEYBRIDGE GARDENS
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
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containing">
              <div id="slide">
                <div className="items interior-one-slide-fours">
                  <div className="content">
                    <div className="name">BATHROOMS</div>
                    <div className="des">
                      Enjoy timeless modern bathrooms with walk-in showers.{" "}
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-ones">
                  <div className="content">
                    <div className="name">LIVING ROOMS</div>
                    <div className="des">
                      Bright and spacious open plan living rooms open out onto a
                      sunny terrace.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-twos">
                  <div className="content">
                    <div className="name">KITCHENS</div>
                    <div className="des">
                      Beautiful open plan modern kitchens feature quartz
                      worktops & custom-made cabinets.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-threes">
                  <div className="content">
                    <div className="name">BEDROOMS</div>
                    <div className="des">
                      All bedrooms are contemporary and come with fully-fitted
                      wardrobes.{" "}
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
      <LeftSidebar />
      <BottomNavigationBar />
    </section>
  );
};

export default WeybridgeGardens;
