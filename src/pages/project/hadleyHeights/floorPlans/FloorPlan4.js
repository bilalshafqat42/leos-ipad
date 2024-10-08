import "../../projectPage.css";
// import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import "../hadleyHeights.css";
import "../exterior.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonShelter,
  faArrowRight,
  faArrowLeft,
  faPuzzlePiece,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";
import ProjectBottomBar from "../../../../components/projectBottomBar/ProjectBottomBar";

const FloorPlan4 = () => {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
          <div className="main-mini-heading-sections">
            <h1 className="mt-2 page-heading-title">
              <Link to="/">HADLEY HEIGHTS 2 BEDROOM APARTMENT + GYM</Link>
            </h1>
            <Link to="/">
              <img
                src={Logo}
                alt="Leos International"
                width={70}
                height={21}
                className="mt-3 mb-3"
              />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide" className="no-thumbs floor-plans-banners">
                <div className="items floor-plans  exterior-one-slide-one-unit-3d-4 floorplans-thumb">
                  <div className="content">
                    <div className="name">
                      2 BEDROOM APARTMENT OPEN PLAN LAYOUT + HOME GYM
                    </div>
                    <div className="des">
                      This open plan layout provides you with the optimum amount
                      of living space for the ultimate in comfort. This layout
                      is well-suited to families and couples who love
                      entertaining at home. You can even incorporate a home gym,
                      a study room, a pet’s room or a kid’s play room with the
                      additional space.
                    </div>
                  </div>
                </div>
                <div className="items floor-plans  exterior-one-slide-one-unit-3d-4 floorplans-thumb">
                  <div className="content">
                    <div className="name">
                      2 BEDROOM APARTMENT OPEN PLAN LAYOUT + HOME GYM
                    </div>
                    <div className="des">
                      This open plan layout provides you with the optimum amount
                      of living space for the ultimate in comfort. This layout
                      is well-suited to families and couples who love
                      entertaining at home. You can even incorporate a home gym,
                      a study room, a pet’s room or a kid’s play room with the
                      additional space.
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
      <div className="left-navigation-menu">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/floors"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Floors</h4>
          </Link>
        </div>
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/units"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Units</h4>
          </Link>
        </div>
        {/* <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/floorplans"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faVectorSquare}
              className="icons-section-bottom-navigation"
            />
            <h4 className="bottom-navigation-itemss">Floor Plans</h4>
          </Link>
        </div> */}
      </div>
      <ProjectBottomBar />
      <div className="right-navigation-menu">
        <div className="left-navigation-menu">
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floorplans"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Studio</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floorplan-2"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">1 Bedroom</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floorplan-3"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">2 Br Study</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floorplan-4"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">2 Br Gym</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floorplan-5"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">2 Br Movie</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan4;
