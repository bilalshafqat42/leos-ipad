import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import ModelSidebar from "../../../../components/cavendish/modelsidebar/ModelSidebar";
import BottomNavigationBar from "../../../../components/cavendish/bottomNavigation/BottomNavigation";
import "./unitPlans.css";
import Logo from "../../.././../../src/assets/images/logo.png";

import { Link } from "react-router-dom";

const UnitPlans2 = () => {
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
            <div className="main-mini-heading-section">
              <Link to="/">
                <h1 className="mt-4 mb-2 page-heading-title">1 Br Type A</h1>
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide" className="no-thumbs floor-plans-banners">
                <div className="items cavendish-item cavendish-unit-plans-slide-two">
                  {/* <div className=" units-plan-content-design">
                    <div className="name">A ONE BEDROOM</div>
                    <div className="des">
                      All studio apartments are beautifully designed to maximise
                      the living space. The living area can be converted with a
                      sofa bed to transform from a living area into a bedroom at
                      night. All studios feature a high quality fully-fitted
                      galley kitchen and a separate bathroom.
                    </div>
                  </div> */}
                </div>
                <div className="items cavendish-item cavendish-unit-plans-slide-two">
                  {/* <div className=" units-plan-content-design">
                  <div className="name">A ONE BEDROOM</div>
                    <div className="des">
                      All studio apartments are beautifully designed to maximise
                      the living space. The living area can be converted with a
                      sofa bed to transform from a living area into a bedroom at
                      night. All studios feature a high quality fully-fitted
                      galley kitchen and a separate bathroom.
                    </div>
                  </div> */}
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
        {/* <div className="mini-navigation-bar-left">
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
        </div> */}
        <div className="mini-navigation-bar-left">
          <Link
            to={"/projects/weybridge-gardens/units"}
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
      <BottomNavigationBar />
      <ModelSidebar />
      {/* <div className="right-navigation-menu units-section-sidebars">
        <div className="left-navigation-menu">
          <h3 style={{
            fontSize: "20px", marginBottom: "20px", "color": "#fff", fontWeight: "400", 
          }}>1 BEDROOM MODELS</h3>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floorplans"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">1st Model</h4>
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
              <h4 className="bottom-navigation-itemss">2nd Model</h4>
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
              <h4 className="bottom-navigation-itemss">3rd Model</h4>
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
              <h4 className="bottom-navigation-itemss">4th Model</h4>
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
      </div> */}
    </section>
  );
};

export default UnitPlans2;
