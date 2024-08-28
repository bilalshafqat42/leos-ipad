import React from "react";
import "./meydan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LeftSidebar from "../../../components/meydan/leftsidebar/LeftSidebar";
import BottomNavigation from "../../../components/meydan/bottomNavigation/BottomNavigation";

const AmenitiesKnightsbridge = () => {
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
                KNIGHTSBRIDGE AMENITIES
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
                <div className="items meydan-amenities-one-slide-three">
                  <div className="content">
                    <div className="name">RE-OXYGENATING WATERFALL
                    </div>
                    {/* <div className="des">
                      HOME TO 288 SPACIOUS MODERN APARTMENTS WITH WORLD-CLASS
                      AMENITIES, WEYBRIDGE GARDENS 2 IS AN ENVIABLE RESIDENTIAL
                      ADDRESS.
                    </div> */}
                  </div>
                </div>
                <div className="items meydan-amenities-one-slide-one">
                  <div className="content">
                    <div className="name">SERPENTINE LAGOON</div>
                    {/* <div className="des">
                      THE ALLURE OF PROVENCE IN DUBAI, DESIGNED & DEVELOPED BY
                      LEOS.
                    </div> */}
                  </div>
                </div>
                <div className="items meydan-amenities-one-slide-two">
                  <div className="content">
                    <div className="name">JAPANESE RAPHA  YOGA</div>
                    {/* <div className="des">
                      CONTEMPORARY LIVING IN THE HEART OF DUBAILAND. YOUR HOME
                      FROM HOME IN DUBAI.
                    </div> */}
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
      <BottomNavigation />
    </section>
  );
};

export default AmenitiesKnightsbridge;
