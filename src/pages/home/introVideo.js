import React from "react";
import "./home.css";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../project/hadleyHeights/exterior.css";

const IntroVideo = () => {
  return (
    <div className="main-page-banner">
      <div className="home-page-topbar">
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
          {/* <div className="home-page-image-section"> */}
          <div
            className="containing-full-width embed-responsive embed-responsive-16by9"
            style={{ padding: "0px" }}
          >
            <iframe
              width="100%"
              height="100%"
              className="youtube-embed-section embed-responsive-item"
              src="https://www.youtube.com/embed/SrRXbyOhKpI?modestbranding=1&controls=0"
              // src="https://www.youtube.com/embed/SrRXbyOhKpI?si=DgEwu6dGmBpBbrl3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* <iframe
              width="1920"
              height="900"
              src="https://www.youtube.com/embed/SrRXbyOhKpI?si=DgEwu6dGmBpBbrl3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
          {/* </div> */}
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
          Ⓒ 2022 - LEOS International. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
