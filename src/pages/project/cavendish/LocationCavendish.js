import React from "react";
// import "../projectPage.css";
import "./cavendish.css";
// import "./exterior.css";

import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";
// import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";

import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";

const LocationCavendish = () => {
  return (
    <section className="">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col">
          <div
            className="main-mini-heading-section"
            // style={{ marginLeft: "-12px" }}
          >
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">Cavendish Square</h1>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col special-location-image-section-cavendish"></div>
        </div>
      </div>
      {/* <LeftSidebar /> */}
      <BottomNavigationBar />
      <div
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
      ></div>
    </section>
  );
};

export default LocationCavendish;
