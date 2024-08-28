import React from "react";
import "./weybridge.css";

import LeftSidebar from "../../../components/weybridge/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/weybridge/bottomNavigation/BottomNavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const LifestyleWey = () => {
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
                <div className="items lifestyle-one-slide-eleven">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-one">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-two">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-three">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-four">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-five">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-six">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-seven">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-eight">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-nine">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-ten">
                  <div className="content">
                    <div className="name">HADLEY HEIGHTS</div>
                    <div className="des">
                      Your home in Jumeirah Village Circle (JVC)
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

export default LifestyleWey;
