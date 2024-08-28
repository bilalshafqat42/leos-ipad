import React from "react";
import "./home.css";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../project/hadleyHeights/exterior.css";

const ExperienceCentre = () => {
  return (
    <div className="main-page-banner">
      <div className="container-fluid home-page-topbar">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-sections">
              <h1 className="mt-4 mb-2 page-heading-title">
                <Link to="/">LEOS PROJECTS</Link>
              </h1>
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
      <div className="row">
        <div className="col">
          <div className="home-page-image-section">
            <iframe
              width="1920"
              height="900"
              src="https://my.matterport.com/show/?m=yFKNkbHQCZA"
              frameborder="0"
              allowfullscreen
              allow="xr-spatial-tracking"
              title="Experience Centre"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="expereince-centre-bottom-copyright-panel">
        <div className="back-to-projects">
          <Link to={"/"}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="icons-section-bottom-navigation"
            />
          </Link>
        </div>
        <div className="copyright-section">
          Ⓒ 2024 - LEOS International. All Rights Reserved
        </div>
      </div>
      {/* <BottomNavigation /> */}
    </div>
  );
};

export default ExperienceCentre;
