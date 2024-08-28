import React from "react";
import "../projectPage.css";
import "./hadleyHeights.css";
import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const Animation = () => {
  return (
    <section className="">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">
                Property Animation
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
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="containing embed-responsive embed-responsive-16by9"
              style={{ padding: "0px" }}
            >
              <iframe
                width="100%"
                height="100%"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/YtYBVtVBU4M?si=7DqTg88P-p_5dNNx"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <LeftSidebar />
      <ProjectBottomBar />
    </section>
  );
};

export default Animation;
