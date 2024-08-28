import React from "react";
import "../projectPage.css";
import "./hadleyHeights.css";
import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Jvc = () => {
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
              <h1 className="mt-4 mb-2 page-heading-title">Hadley Heights</h1>
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
                <div className="items jvc-one-slide-images-one">
                  <div className="content">
                    <div className="name">JUMEIRAH VILLAGE CIRCLE (JVC)</div>
                    <div className="des">
                      A vibrant residential community only 10 mins from Dubai
                      marina & Sheikh Zayed road
                    </div>
                  </div>
                </div>
                <div className="items jvc-one-slide-images-two">
                  <div className="content">
                    <div className="name">JUMEIRAH VILLAGE CIRCLE</div>
                    <div className="des">
                      A master-planned community located on Hessa St, close to
                      leading educational & medical facilities
                    </div>
                  </div>
                </div>
                <div className="items jvc-one-slide-images-three">
                  <div className="content">
                    <div className="name">JUMEIRAH VILLAGE CIRCLE</div>
                    <div className="des">
                      A popular locaton with young professionals & families with
                      children, offering a plethora of amenities on your
                      doorstep
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
      {/* <LeftSidebar /> */}
      <LeftSidebar />
      <ProjectBottomBar />
    </section>
  );
};

export default Jvc;
