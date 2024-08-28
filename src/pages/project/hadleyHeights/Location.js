import React from "react";
import "../projectPage.css";
import "./hadleyHeights.css";
import "./exterior.css";

import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";

const Location = () => {
  return (
    <section className="">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">Hadley Heights</h1>
            </Link>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col special-location-image-section"></div>
        </div>
      </div>
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
        }}
      ></div> */}
    </section>
  );
};

export default Location;
