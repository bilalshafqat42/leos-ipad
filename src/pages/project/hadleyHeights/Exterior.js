import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";

import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";

const Exterior = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  return (
    <section className="exterior-page-section">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to={"/"}>
              <h1 className="mt-4 mb-2 page-heading-title">Exteriors</h1>
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
            <div className="containing hadley-heights-main">
              <div id="slide">
                <div className="items exterior-one-slide-one">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-two">
                  <div className="content">
                    <div className="name">MODERN ARCHITECTURE & DESIGN</div>
                    <div className="des">
                      Designed and built to the highest quality specifications
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-three">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-four">
                  <div className="content">
                    <div className="name">BRITISH QUALITY STANDARDS</div>
                    <div className="des">
                      Setting a new benchmark in quality and design.{" "}
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-five-h">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      A premium quality lifestyle community in Dubai
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-six-h">
                  <div className="content">
                    <div className="name">Location, Location, Location</div>
                    <div className="des">
                      A strategic location close to the heart of the city.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-seven-h">
                  <div className="content">
                    <div className="name">World Class Amenities</div>
                    <div className="des">
                      Home to a plethora of leisure and sports facilities to
                      suit all ages and interests
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-eight-h">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-nine-h">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-ten-h">
                  <div className="content">
                    <div className="name">PREMIUM QUALITY APARTMENTS</div>
                    <div className="des">
                      Choose from studios, 1 & 2 bedroom apartments
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-eleven-h">
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
      <LeftSidebar />
      <ProjectBottomBar />
    </section>
  );
};

export default Exterior;
