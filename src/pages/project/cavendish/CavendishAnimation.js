import React from "react";

import "./cavendish.css";

import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";
import LeftSidebar from "../../../components/cavendish/leftsidebar/LeftSidebar";

import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const CavendishAnimation = () => {
  return (
    <section className="">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">
                Apartment Walk Though
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
                src="https://www.youtube.com/embed/2dTwCY-IHrY?si=khLnDsqYqxjTF-ZB"
                title="Cavendish Square Walkthrough"
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
      <BottomNavigationBar />
    </section>
  );
};

export default CavendishAnimation;
