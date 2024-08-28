import "../../projectPage.css";
// import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import "../hadleyHeights.css";
import "../exterior.css";
import ProjectBottomBar from "../../../../components/projectBottomBar/ProjectBottomBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPuzzlePiece,
  faObjectGroup,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const FloorPlans = () => {
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
              <Link to="/">HADLEY HEIGHTS STUDIO APARTMENT</Link>
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide" className="no-thumbs floor-plans-banners">
                <div className="items floor-plans exterior-one-slide-one-unit-3d-1 floorplans-thumb">
                  <div className="content">
                    <div className="name">STUDIO APARTMENTS</div>
                    <div className="des">
                      All studio apartments are beautifully designed to maximise
                      the living space. The living area can be converted with a
                      sofa bed to transform from a living area into a bedroom at
                      night. All studios feature a high quality fully-fitted
                      galley kitchen and a separate bathroom.
                    </div>
                    {/* <button>See More</button> */}
                  </div>
                </div>
                <div className="items floor-plans exterior-one-slide-one-unit-3d-1 floorplans-thumb">
                  <div className="content">
                    <div className="name">STUDIO APARTMENTS</div>
                    <div className="des">
                      All studio apartments are beautifully designed to maximise
                      the living space. The living area can be converted with a
                      sofa bed to transform from a living area into a bedroom at
                      night. All studios feature a high quality fully-fitted
                      galley kitchen and a separate bathroom.
                    </div>
                    {/* <button>See More</button> */}
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
      <div className="left-navigation-menu units-section-sidebars">
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/hadley-heights/floors"}
            className="d-flex flex-direction-row text-center align-items-center"
          >
            <FontAwesomeIcon
              icon={faObjectGroup}
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
      </div>
      <ProjectBottomBar />
      <div className="right-navigation-menu units-section-sidebars">
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

export default FloorPlans;
