import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";

import "./exterior.css";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";

const Interior = () => {
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
        <div className="main-mini-heading-sections">
            <h1 className="mt-2 page-heading-title">
              <Link to="/">HADLEY HEIGHTS INTERIOR</Link>
            </h1>
            <Link to="/">
              <img
                src={Logo}
                alt="Leos International"
                width={98}
                height={30}
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
                <div className="items interior-one-slide-eleven">
                  <div className="content">
                    <div className="name">ELEVATOR HALLWAYS</div>
                    <div className="des">
                      Modern, spacious hallways on all floors.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-one">
                  <div className="content">
                    <div className="name">KITCHEN</div>
                    <div className="des">
                      Contemporary kitchens with built-in appliances.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-two">
                  <div className="content">
                    <div className="name">LIVING ROOMS</div>
                    <div className="des">
                      description lorem ipsum sedts at dummy text written here.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-three">
                  <div className="content">
                    <div className="name">LIVING / DINING AREA</div>
                    <div className="des">
                      The perfect space to enjoy quality downtime.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-four">
                  <div className="content">
                    <div className="name">BEDROOMS</div>
                    <div className="des">
                      Elegant and sophisticated bedrooms.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-five">
                  <div className="content">
                    <div className="name">Bathrooms</div>
                    <div className="des">
                      Stylish and functional modern bathrooms.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-six">
                  <div className="content">
                    <div className="name">CHILDREN’S BEDROOM</div>
                    <div className="des">
                      Create the perfect haven for your little ones.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-seven">
                  <div className="content">
                    <div className="name">STUDY ROOM</div>
                    <div className="des">
                      Customise your living space with a private study room
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-eight">
                  <div className="content">
                    <div className="name">PET’S ROOM</div>
                    <div className="des">
                      Create your own pet’s room or play area.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-nine">
                  <div className="content">
                    <div className="name">HOME GYM </div>
                    <div className="des">
                      Incorporate your own personal gym at home.
                    </div>
                  </div>
                </div>
                <div className="items interior-one-slide-ten">
                  <div className="content">
                    <div className="name">TERRACES</div>
                    <div className="des">
                      All apartments feature a beautiful sunny terrace.
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

export default Interior;
