import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import "./meydan.css";
import Logo from "../../../../assets/images/logo.png";
import LeftSidebar from "../../../../components/meydan/leftsidebar/LeftSidebar";
import BottomNavigation from "../../../../components/meydan/bottomNavigation/BottomNavigation";
import ModelSidebar from "../../../../components/meydan/modelsidebar/ModelSidebar";
import { Link } from "react-router-dom";

const FloorPlanKnightsbridge2 = () => {
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
                  6 BEDROOM STAND ALONE VILLA
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
              <div id="slide" className="no-thumbs floor-plans-banners">
                <div className="items wheybridge-item knightsbridge-unit-plans-slide-twoss"></div>
                <div className="items wheybridge-item knightsbridge-unit-plans-slide-twos"></div>
                <div className="items wheybridge-item knightsbridge-unit-plans-slide-twoss"></div>
                <div className="items wheybridge-item knightsbridge-unit-plans-slide-twos"></div>
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
      <BottomNavigation />
      <LeftSidebar />
      <ModelSidebar />
    </section>
  );
};

export default FloorPlanKnightsbridge2;
