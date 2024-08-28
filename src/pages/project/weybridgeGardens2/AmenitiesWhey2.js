import React from "react";
import "./weybridgeGardens2.css";

import LeftSidebar from "../../../components/weybridge2/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/weybridge2/bottomNavigation/BottomNavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const AmenitiesWhey2 = () => {
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
                <div className="items amenities-exterior-one-slide-fives">
                  <div className="content">
                    <div className="name">A MODERN ENTRANCE LOBBY</div>
                    <div className="des">
                      WELCOME HOME TO A BEAUTIFULLY DESIGNED ENTRANCE LOBBY WITH
                      A CO-WORKING SPACE & A LEOS DAVINCI ART ACADEMY.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-ones">
                  <div className="content">
                    <div className="name">ROOFTOP LIVING IN DUBAILAND</div>
                    <div className="des">
                      ENJOY A STUNNING ROOFTOP AREA WITH AN INFINITY POOL, A
                      GYM, OUTDOOR SEATING AREAS AND OTHER AMENITIES.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-twos">
                  <div className="content">
                    <div className="name">A ROOFTOP INFINITY POOL</div>
                    <div className="des">
                      DIVE INTO A LARGE INFINITY SWIMMING POOL OR LOUNGE
                      POOLSIDE ON ONE OF THE SUNBEDS AND CABANAS.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-threes">
                  <div className="content">
                    <div className="name">A FULLY-EQUIPPED GYMNASIUM</div>
                    <div className="des">
                      GET YOUR ADRENLIN FIX IN THE COMMUNITY’S STATE-OF-THE-ART
                      GYM WITH A LEOS BOXING & DANCE STUDIO.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-fours">
                  <div className="content">
                    <div className="name">LE PETIT CAFE</div>
                    <div className="des">
                      LE PETIT CAFE OFFERS HEALTHY FOOD AND REFRESHMENTS AND
                      ALSO FEATURES A CO-WORKING SPACE AND AN AI SUPERMARKET.
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

export default AmenitiesWhey2;
