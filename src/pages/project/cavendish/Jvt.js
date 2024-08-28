import React from "react";
import "./cavendish.css";

import LeftSidebar from "../../../components/cavendish/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Jvt = () => {
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
                <div className="items cavendish-jvt-one-slide-eleven">
                  <div className="content">
                    <div className="name">PERFECT FOR PET LOVERS</div>
                    <div className="des">JVT is a pet-friendly community. </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-one">
                  {/* <div className="content">
                    <div className="name">Cavendish Square</div>
                    <div className="des">
                      JVT
                    </div>
                  </div> */}
                </div>
                <div className="items cavendish-jvt-one-slide-two">
                  <div className="content">
                    {/*<div className="name">JVT Amenities</div>
                    <div className="des">
                       Natural Materials Inspired by the Elements, Iconic
                      Architectural Landscaping 
                    </div>*/}
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-three">
                  <div className="content">
                    <div className="name">AN ESTABLISHED COMMUNITY</div>
                    <div className="des">
                      A leafy green residential district with traditional style
                      villas.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-four">
                  <div className="content">
                    <div className="name">OUTDOOR AREAS</div>
                    <div className="des">
                      JVT is home to expansive green areas with parks and lush
                      landscaping.{" "}
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-five">
                  <div className="content">
                    <div className="name">TENNIS & BADMINTON COURTS</div>
                    <div className="des">
                      Enjoy playing tennis & badminton in your free time.{" "}
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-six">
                  <div className="content">
                    <div className="name">OUTDOOR FITNESS AREAS</div>
                    <div className="des">
                      With expansive open spaces and walkways, it’s the perfect
                      place to stay active.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-seven">
                  <div className="content">
                    <div className="name">A FOOTBALLER’S PARADISE</div>
                    <div className="des">
                      A variety of parks welcome football enthusiasts.{" "}
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-eight">
                  <div className="content">
                    <div className="name">JOGGING & RUNNING PATHS</div>
                    <div className="des">
                      Whatever your pace, you can embrace an active lifestyle.{" "}
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-nine">
                  <div className="content">
                    <div className="name">BASKETBALL COURTS</div>
                    <div className="des">
                      Play basketball with friends 365 days a year.{" "}
                    </div>
                  </div>
                </div>
                <div className="items cavendish-jvt-one-slide-ten">
                  <div className="content">
                    <div className="name">CRICKET PITCHES</div>
                    <div className="des">
                      Enjoy playing cricket at the heart of JVT.{" "}
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

export default Jvt;
