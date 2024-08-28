import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";

import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";

const VirtualTour = () => {
  return (
    <section className="exterior-page-section">
      <div className="row">
        <div className="col">
        <div className="main-mini-heading-sections">
            <h1 className="mt-2 page-heading-title">
              <Link to="/">HADLEY HEIGHTS VIRTUAL TOUR</Link>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div
              className="containing-full-width embed-responsive embed-responsive-16by9"
              style={{ padding: "0px" }}
            >
              <iframe
                width="100%"
                height="100%"
                className="youtube-embed-section embed-responsive-item"
                src="https://www.youtube.com/embed/SrRXbyOhKpI?si=DgEwu6dGmBpBbrl3"
                title="Hadley Heights Virtual Tour"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <LeftSidebar /> */}
      <ProjectBottomBar />
      {/* <div
        className="bottom-black-border"
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "#232323",
          position: "absolute",
          bottom: "0",
          left: "0",
          // zIndex: "999999",
        }}
      ></div> */}
    </section>
  );
};

export default VirtualTour;
