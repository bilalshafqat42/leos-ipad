import React from "react";
import "./cavendish.css";

import LeftSidebar from "../../../components/cavendish/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const InteriorCavendish = () => {
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
              <h1 className="mt-4 mb-2 page-heading-title">CAVENDISH SQUARE</h1>
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
                <div className="items cavendish-interior-one-slide-six">
                  <div className="content">
                    <div className="name">CONTEMPORARY BATHROOMS</div>
                    <div className="des">
                      Featuring walk-in showers, branded sanitaryware and LED
                      downlights.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-interior-one-slide-ones">
                  <div className="content">
                    <div className="name">MODERN LIVING AREAS</div>
                    <div className="des">
                      Bright and spacious, open-plan living rooms with sunny
                      terraces.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-interior-one-slide-nine">
                  <div className="content">
                    <div className="name">TIMELESS DESIGNS</div>
                    <div className="des">
                      Contemporary, spacious living areas with neutral colour
                      palettes.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-interior-one-slide-twos">
                  <div className="content">
                    <div className="name">SUPERIOR QUALITY KITCHENS</div>
                    <div className="des">
                      Contemporary kitchens with quartz worktops and branded
                      appliances.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-interior-one-slide-fours">
                  <div className="content">
                    <div className="name">STUDIO APARTMENTS</div>
                    <div className="des">
                      Cleverly designed, spacious studios with a private
                      terrace.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-interior-one-slide-threes">
                  <div className="content">
                    <div className="name">ONE BEDROOM APARTMENTS </div>
                    <div className="des">
                      Expansive bedrooms with built-in wardrobes and an en-suite
                      bathroom.
                    </div>
                  </div>
                </div>

                <div className="items cavendish-interior-one-slide-five">
                  <div className="content">
                    <div className="name">PREMIUM ONE BEDROOM APARTMENTS</div>
                    <div className="des">
                      Corner one bedroom apartments feature a hot tub on their L
                      shape terrace.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-interior-one-slide-twelve">
                  <div className="content">
                    <div className="name">PRIVATE HOT TUBS</div>
                    <div className="des">
                      Relax and unwind in your own private hot tub with
                      beautiful views.
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

export default InteriorCavendish;
