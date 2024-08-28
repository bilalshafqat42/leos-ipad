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
                <div className="items whey-exterior-one-slide-eight">
                  <div className="content">
                    <div className="name">CONTEMPORARY LIVING</div>
                    <div className="des">At Its Best</div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-one">
                  <div className="content">
                    <div className="name">WEYBRIDGE GARDENS</div>
                    <div className="des">Dubailand Living</div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-two">
                  <div className="content">
                    <div className="name">MODERN ARCHITECTURE</div>
                    <div className="des">Meets Elegant Designs</div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-three">
                  <div className="content">
                    <div className="name">CONTEMPORARY LIVING</div>
                    <div className="des">At Its Best In Dubai</div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-four">
                  <div className="content">
                    <div className="name">SUNNY BALCONIES</div>
                    <div className="des">For Alfresco Entertaining </div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-five">
                  <div className="content">
                    <div className="name">A MID-RISE RESIDENTIAL TOWER</div>
                    <div className="des">Home to 187 Apartments</div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-six">
                  <div className="content">
                    <div className="name">CHOOSE FROM STUDIOS</div>
                    <div className="des">& One Bedroom Apartments</div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-seven">
                  <div className="content">
                    <div className="name">LIVE IN THE HEART OF DUBAILAND</div>
                    <div className="des">
                      With A Wealth Of Amenities At Your Fingertips
                    </div>
                  </div>
                </div>

                {/* <div className="items whey-exterior-one-slide-six">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                  </div>
                </div>
                <div className="items whey-exterior-one-slide-seven">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                  </div>
                </div> */}
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
