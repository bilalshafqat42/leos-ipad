import React from "react";
import "./weybridgeGardens2.css";

import LeftSidebar from "../../../components/weybridge2/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/weybridge2/bottomNavigation/BottomNavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const InteriorWhey2 = () => {
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
                WEYBRIDGE GARDENS 2
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
                <div className="items interior-one-slide-sixs2">
                  <div className="content">
                    <div className="name">COMMUNITY HALLWAYS</div>
                    <div className="des">
                      ENJOY BRIGHT AND SPACIOUS HALLWAYS WITH FOUR ELEVATORS
                      OPERATING TO ALL FLOORS.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-ones2">
                  <div className="content">
                    <div className="name">WEYBRIDGE GARDENS 2</div>
                    <div className="des">
                      BEAUTIFULLY DESIGNED APARTMENTS WITH SUPERIOR QUALITY
                      FINISHES.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-twos2">
                  <div className="content">
                    <div className="name">CONTEMPORARY INTERIOR DESIGN</div>
                    <div className="des">
                      CHOOSE FROM SPACIOUS STUDIOS, 1, 2 & 3 BEDROOM APARTMENTS
                      WITH PRIVATE TERRACES.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-threes2">
                  <div className="content">
                    <div className="name">MODERN OPEN-PLAN KITCHENS</div>
                    <div className="des">
                      ENJOY BRIGHT, FULLY-EQUIPPED KITCHENS WITH A BREAKFAST BAR
                      & HIGH QUALITY QUARTZ WORKTOPS.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-fours2">
                  <div className="content">
                    <div className="name">BEDROOMS INSPIRED BY PROVENCE</div>
                    <div className="des">
                      COME HOME TO BEAUTIFULLY DESIGNED BEDROOMS WITH EN-SUITE
                      BATHROOMS & BUILT-IN WARDROBES.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-fives2">
                  <div className="content">
                    <div className="name">TIMELESS BATHROOMS </div>
                    <div className="des">
                      DESIGNED FOR MODERN DAY LIVING, ENJOY CONTEMPORARY
                      BATHROOMS WITH A NEUTRAL COLOUR PALETTE & HIGH QUALITY
                      SANITARYWARE.
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

export default InteriorWhey2;
