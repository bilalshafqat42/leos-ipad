import React from "react";
import "./cavendish.css";

import LeftSidebar from "../../../components/cavendish/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";

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
                <div className="items cavendish-exterior-one-slide-six">
                  <div className="content">
                    <div className="name">ELEVATED LIVING IN JVT</div>
                    <div className="des">
                      A lifestyle community with world-class amenities.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-exterior-one-slide-one">
                  <div className="content">
                    <div className="name">Cavendish Square</div>
                    <div className="des">Elevated living in JVT.</div>
                  </div>
                </div>
                <div className="items cavendish-exterior-one-slide-four">
                  <div className="content">
                    <div className="name">Timeless modern designs</div>
                    <div className="des">A low-rise residential community.</div>
                  </div>
                </div>
                <div className="items cavendish-exterior-one-slide-three">
                  <div className="content">
                    <div className="name">Contemporary europe meets Dubai</div>
                    <div className="des">
                      Spacious studios & one bedroom apartments.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-exterior-one-slide-two">
                  <div className="content">
                    <div className="name">Refined design</div>
                    <div className="des">
                      Designed & built to superior quality standards.
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
