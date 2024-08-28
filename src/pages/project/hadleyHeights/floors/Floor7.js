import "../../projectPage.css";
import "../hadleyHeights.css";
import "../exterior.css";
import ProjectBottomBar from "../../../../components/projectBottomBar/ProjectBottomBar";

import { firstFloors } from "../../../../db/firstFloor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonShelter,
  faArrowRight,
  faArrowLeft,
  faBed,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Floor7 = () => {
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
                <h1 className="mt-4 mb-2 page-heading-title">
                  Hadley Heights Page
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containings">
              <div id="slide">
                <div className="items exterior-one-slide-floor-seven">
                  <div className="content">
                    <div className="name">7th Floor</div>
                    <div className="des"></div>
                  </div>
                </div>
                <div className="items exterior-one-slide-floor-seven">
                  <div className="content">
                    <div className="name">7th Floor</div>
                    <div className="des"></div>
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
      <div className="left-navigation-menu units-section-sidebars">
        <div className="row gx-2 m-1">
          {firstFloors.slice(50, 60).map((firstFloor, index) => (
            <div className="col-6">
              <Link
                to={`/projects/hadley-heights/units/${firstFloor.id}`}
                kay={index}
                className=""
              >
                <div
                  className={`${
                    firstFloor.status === "Available" ? "green-bg" : "red-bg"
                  } w-100 px-2`}
                >
                  <span className="units-boxes-design m-1 d-flex flex-column align-center justify-content-center py-3">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="icons-section-bottom-navigation mt-2 mb-0"
                    />
                    <h4 className="bottom-navigation-itemss pt-2 mb-3">
                      {firstFloor.unitNo}
                    </h4>
                    <p className="small-text">{firstFloor.bedrooms}</p>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ProjectBottomBar />
      <div className="right-navigation-menu units-section-sidebars">
        <div className="left-navigation-menu">
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-1"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 1</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-2"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 2</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-3"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 3</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-4"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 4</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-5"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 5</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-6"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 6</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-7"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 7</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-8"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 8</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-9"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 9</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-10"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 10</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-11"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 11</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-12"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 12</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-13"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 13</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-14"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 14</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-15"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 15</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-16"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 16</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-17"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 17</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-18"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 18</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-19"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 19</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-20"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 20</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-21"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 21</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-22"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faPersonShelter}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Floor 22</h4>
            </Link>
          </div>
          <div className="mini-navigation-bar-left">
            <Link
              to={"/projects/hadley-heights/floors-23"}
              className="d-flex flex-direction-row text-center align-items-center"
            >
              <FontAwesomeIcon
                icon={faBuilding}
                className="icons-section-bottom-navigation"
              />
              <h4 className="bottom-navigation-itemss">Building</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Floor7;
