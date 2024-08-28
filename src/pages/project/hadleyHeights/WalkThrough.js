import React from "react";
import "../projectPage.css";
import "./hadleyHeights.css";
import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const WalkThrough = () => {
  return (
    <section className="">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-sections">
            <h1 className="mt-2 page-heading-title">
              <Link to="/">HADLEY HEIGHTS WALKTHROUGH</Link>
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
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="containing hadley-heights-main"
              style={{ padding: "0px" }}
            >
              <iframe
                width="100%"
                height="100%"
                className="youtube-embed-section embed-responsive-item"
                src="https://www.youtube.com/embed/aSIuVeBnzig?si=TnqDDde6i9iQ2lVa"
                title="Hadley Heights Walkthrough"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
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

export default WalkThrough;
